const config = require('../config.js');
var rp = require('request-promise');

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

		    var dateObj = new Date(date);
		    var month = '' + (dateObj.getMonth() + 1);
		    var day = '' + dateObj.getDate();
		    var year = '' + dateObj.getFullYear();
		    var dateNew =   day + "/" + month + "/" + year;

    	// Get place codes
    	for (var i = config.CITIES.length - 1; i >= 0; i--) {
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
				let flight_class = result.flights["0"].le["0"].cls;
				let departure_date = result.flights["0"].le["0"].fmtDeparture;
				let departure_time = result.flights["0"].le["0"].fmtDepartureTime;
				let arrival_date = result.flights["0"].le["0"].fmtArrival;
				let arrival_time = result.flights["0"].le["0"].fmtArrivalTime;
				let stops = (result.flights["0"].le["0"].noOfStops == "Non Stop") ? 0 : result.flights["0"].le["0"].noOfStops;
				if (stops == 1) {
					stops += " stop";
				}else{
					stops += " stops";
				}
				let fare = result.flights["0"].af;
				passengers = (passengers == 1) ? passengers+' person': passengers+' persons';
				let RESPONSE_TEXT = "The cheapest flight from "+src+" to "+ dest + " for "+ passengers + " costs "+ fare+ " Rupees. It is in "+flight_class+" class and has " + stops +".";
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

module.exports = mainHandler;