const config = require('../config.js');
const rp = require('request-promise');

const mainHandler = {
    'LaunchRequest': function () {
        this.response.cardRenderer("Hello! Welcome to Flight Cards!");
        this.response.speak("Hello! Welcome to Flight Cards!");
        this.emit(':responseReady');
    },
    'GetFlightPriceIntent': function () {
        
    	let date = this.event.request.intent.slots.date.value,
    		passengers = this.event.request.intent.slots.passengers.value,
    		dest = this.event.request.intent.slots.dest.value,
    		src = this.event.request.intent.slots.src.value,
    		classType = "E",
    		src_code = undefined,
    		dest_code = undefined;
    		RESPONSE_TEXT = "",
    		RANDOM_FAIL = getRandomSpeechcon(failSpeechcons);

		    let dateObj = new Date(date);
		    let currentDateObj = new Date();

		    let currentMonth = '' + (currentDateObj.getMonth() + 1);
		    let currentDay = '' + currentDateObj.getDate();
		    let currentYear = '' + currentDateObj.getFullYear();
			
			currentDateObj = new Date(currentMonth+"-"+currentDay+"-"+currentYear);

		    if (dateObj.getTime() < currentDateObj.getTime()) {
		    	// Date is in past
		    	RESPONSE_TEXT = "<say-as interpret-as=\"interjection\">"+ RANDOM_FAIL +"</say-as>! The date should be today's date or a date in future. Please try again.";
		    	this.response.cardRenderer(""+ RANDOM_FAIL +"! The date should be today's date or a date in future. Please try again.");
		        this.response.speak(RESPONSE_TEXT);
		        this.emit(':responseReady');
		    }

		    let month = '' + (dateObj.getMonth() + 1);
		    let day = '' + dateObj.getDate();
		    let year = '' + dateObj.getFullYear();
		    let dateNew =   day + "/" + month + "/" + year;

    	// Get place codes
    	for (let i = config.CITIES.length - 1; i >= 0; i--) {
    		if(config.CITIES[i].city.toLowerCase() == dest.toLowerCase()){
    			dest_code = config.CITIES[i].code;
    		}
    		if(config.CITIES[i].city.toLowerCase() == src.toLowerCase()){
    			src_code = config.CITIES[i].code;
    		}
    	}

    	// Check if the passengers are not given in the intent
    	if(!passengers){
    		passengers = 1;
    	}

    	// Check if the city codes are there with us.
    	if (!src_code || !dest_code) {
			this.response.cardRenderer("Sorry we dont know that place, can you please try again?");
	        this.response.speak("Sorry we dont know that place, can you please try again?");
	        this.emit(':responseReady');
    	}
    	// Conslole Logs
    	
        console.log("Date", dateNew);
        console.log("passengers", this.event.request.intent.slots.passengers);
        console.log("dest", this.event.request.intent.slots.dest);
        console.log("src", this.event.request.intent.slots.src);
        console.log("src_code", src_code);
        console.log("dest_code", dest_code);

    	// Prepare data for the call
    	let URL = config.API_URL + 
			"?classType=" + classType +
			"&fromCity="+ src_code +
			"&toCity="+ dest_code +
			"&deptDate=" + dateNew +
			"&noOfChd=0&noOfInfnt=0&noOfAdlts="+ passengers +
			"&lob=Flight"+
			"&noOfChd=0"+
			"&noOfInfnt=0"+
			"&tripType=O"+
			"&tripTypeDup=O";
		console.log(URL);
		rp(URL)
			.then(result => {
				console.log(result);
				result = JSON.parse(result);
				if (result.flights === undefined) {
					// there are no flights
					RESPONSE_TEXT = "<say-as interpret-as=\"interjection\">"+ RANDOM_FAIL +"</say-as>! There seems to be no flights for this route and date. Please try again with a different date.";
			    	this.response.cardRenderer(""+ RANDOM_FAIL +"!  There seems to be no flights for this route and date. Please try again with a different date.");
			        this.response.speak(RESPONSE_TEXT);
			        this.emit(':responseReady');
				}
				let flight_class = result.flights["0"].le["0"].cls;
				let flight_alirlines = result.flights["0"].le["0"].an;
				let flight_code = result.flights["0"].le["0"].cc;
				let flight_number = result.flights["0"].le["0"].fn;
				
				let departure_date = result.flights["0"].le["0"].fmtDeparture;
				let departure_time = result.flights["0"].le["0"].fmtDepartureTime;
				let arrival_date = result.flights["0"].le["0"].fmtArrival;
				let arrival_time = result.flights["0"].le["0"].fmtArrivalTime;
				let stops = (result.flights["0"].le["0"].noOfStops == "Non Stop") ?  "is "+result.flights["0"].le["0"].noOfStops : "has "+result.flights["0"].le["0"].noOfStops;
				let fare = result.flights["0"].af;
				passengers = (passengers == 1) ? passengers+' person': passengers+' persons';
				RESPONSE_TEXT = "The cheapest flight from "+src+" to "+ dest + " for "+ passengers + " is "+flight_alirlines+ " "+flight_code +" <say-as interpret-as=\"digits\">"+flight_number+"</say-as>, which costs "+ fare+ " Rupees per person for "+flight_class+" class, and " + stops +".";
				//"It departs from "+ src + " at " + departure_time + ", " + departure_date + " and arrives to " + dest + " at " + arrival_time + ", "+ arrival_date + "."; 
				console.log(RESPONSE_TEXT);
				this.response.cardRenderer(RESPONSE_TEXT);
				this.response.speak(RESPONSE_TEXT);
        		this.emit(':responseReady');
		    })
		    .catch(err => {
		    	console.log(err);
				this.response.cardRenderer("There was an error. Please try again!");
				this.response.speak("There was an error. Please try again!");
        		this.emit(':responseReady');
		    });
    },
};

const failSpeechcons = [
	"aiyo",
	"aw man",
	"oh boy",
	"oh dear",
	"oh my",
	"oh snap",
	"uh oh"
	];

function getRandomSpeechcon(data){
	let i = Math.floor(Math.random() * data.length);
	return(data[i]);
}

module.exports = mainHandler;