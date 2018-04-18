const config = {
    APP_ID : undefined,
    SKILL_NAME : 'Flight Cards',
    GET_FLIGHTS_MESSAGE : "Here's your fact: ",
    HELP_MESSAGE : ' You can ask me things like, cheapest flight between Delhi and Mumbai for 2 persons or, you can say exit... What can I help you with?',
    HELP_REPROMPT : 'What can I help you with?',
    STOP_MESSAGE : 'Goodbye!',
    API_URL: "api_url_here",
    CITIES: [
		{
			city: "Agartala",
			code: "IXA"
		},
		{
			city: "Agatti Island",
			code: "AGX"
		},
		{
			city: "Agra",
			code: "AGR"
		},
		{
			city: "Ahmedabad",
			code: "AMD"
		},
		{
			city: "Aizawl",
			code: "AJL"
		},
		{
			city: "Akola",
			code: "AKD"
		},
		{
			city: "Allahabad",
			code: "IXD"
		},
		{
			city: "Along",
			code: "IXV"
		},
		{
			city: "Amritsar",
			code: "ATQ"
		},
		{
			city: "Aurangabad",
			code: "IXU"
		},
		{
			city: "Bagdogra",
			code: "IXB"
		},
		{
			city: "Balurghat",
			code: "RGH"
		},
		{
			city: "Bangalore",
			code: "BLR"
		},
		{
			city: "Bareli",
			code: "BEK"
		},
		{
			city: "Belgaum",
			code: "IXG"
		},
		{
			city: "Bellary",
			code: "BEP"
		},
		{
			city: "Bhatinda",
			code: "BUP"
		},
		{
			city: "Bhavnagar",
			code: "BHU"
		},
		{
			city: "Bhopal",
			code: "BHO"
		},
		{
			city: "Bhubaneswar",
			code: "BBI"
		},
		{
			city: "Bhuj",
			code: "BHJ"
		},
		{
			city: "Bikaner",
			code: "BKB"
		},
		{
			city: "Bilaspur",
			code: "PAB"
		},
		{
			city: "Mumbai",
			code: "BOM"
		},
		{
			city: "Kolkata",
			code: "CCU"
		},
		{
			city: "Car",
			code: "CBD"
		},
		{
			city: "Chandigarh",
			code: "IXC"
		},
		{
			city: "Coimbatore",
			code: "CJB"
		},
		{
			city: "Cooch",
			code: "COH"
		},
		{
			city: "Cuddapah",
			code: "CDP"
		},
		{
			city: "Daman",
			code: "NMB"
		},
		{
			city: "Daparizo",
			code: "DAE"
		},
		{
			city: "Darjeeling",
			code: "DAI"
		},
		{
			city: "Dehra",
			code: "DED"
		},
		{
			city: "Delhi",
			code: "DEL"
		},
		{
			city: "Deparizo",
			code: "DEP"
		},
		{
			city: "Dhanbad",
			code: "DBD"
		},
		{
			city: "Dharamsala",
			code: "DHM"
		},
		{
			city: "Dibrugarh",
			code: "DIB"
		},
		{
			city: "Dimapur",
			code: "DMU"
		},
		{
			city: "Diu",
			code: "DIU"
		},
		{
			city: "Gaya",
			code: "GAY"
		},
		{
			city: "Goa",
			code: "GOI"
		},
		{
			city: "Gorakhpur",
			code: "GOP"
		},
		{
			city: "Guna",
			code: "GUX"
		},
		{
			city: "Guwahati",
			code: "GAU"
		},
		{
			city: "Gwalior",
			code: "GWL"
		},
		{
			city: "Hissar",
			code: "HSS"
		},
		{
			city: "Hubli",
			code: "HBX"
		},
		{
			city: "Hyderabad",
			code: "HYD"
		},
		{
			city: "Imphal",
			code: "IMF"
		},
		{
			city: "Indore",
			code: "IDR"
		},
		{
			city: "Jabalpur",
			code: "JLR"
		},
		{
			city: "Jagdalpur",
			code: "JGB"
		},
		{
			city: "Jaipur",
			code: "JAI"
		},
		{
			city: "Jaisalmer",
			code: "JSA"
		},
		{
			city: "Jammu",
			code: "IXJ"
		},
		{
			city: "Jamnagar",
			code: "JGA"
		},
		{
			city: "Jamshedpur",
			code: "IXW"
		},
		{
			city: "Jeypore",
			code: "PYB"
		},
		{
			city: "Jodhpur",
			code: "JDH"
		},
		{
			city: "Jorhat",
			code: "JRH"
		},
		{
			city: "Kailashahar",
			code: "IXH"
		},
		{
			city: "Kamalpur",
			code: "IXQ"
		},
		{
			city: "Kandla",
			code: "IXY"
		},
		{
			city: "Kanpur",
			code: "KNU"
		},
		{
			city: "Keshod",
			code: "IXK"
		},
		{
			city: "Khajuraho",
			code: "HJR"
		},
		{
			city: "Khowai",
			code: "IXN"
		},
		{
			city: "Kochi",
			code: "COK"
		},
		{
			city: "Kolhapur",
			code: "KLH"
		},
		{
			city: "Kota",
			code: "KTU"
		},
		{
			city: "Kozhikode",
			code: "CCJ"
		},
		{
			city: "Kulu",
			code: "KUU"
		},
		{
			city: "Leh",
			code: "IXL"
		},
		{
			city: "Lilabari",
			code: "IXI"
		},
		{
			city: "Lucknow",
			code: "LKO"
		},
		{
			city: "Ludhiana",
			code: "LUH"
		},
		{
			city: "Chennai",
			code: "MAA"
		},
		{
			city: "Madurai",
			code: "IXM"
		},
		{
			city: "Malda",
			code: "LDA"
		},
		{
			city: "Mangalore",
			code: "IXE"
		},
		{
			city: "Mohanbari",
			code: "MOH"
		},
		{
			city: "Muzaffarnagar",
			code: "MZA"
		},
		{
			city: "Muzaffarpur",
			code: "MZU"
		},
		{
			city: "Mysore",
			code: "MYQ"
		},
		{
			city: "Nagpur",
			code: "NAG"
		},
		{
			city: "Nanded",
			code: "NDC"
		},
		{
			city: "Nasik",
			code: "ISK"
		},
		{
			city: "Neyveli",
			code: "NVY"
		},
		{
			city: "Osmanabad",
			code: "OMN"
		},
		{
			city: "Pantnagar",
			code: "PGH"
		},
		{
			city: "Pasighat",
			code: "IXT"
		},
		{
			city: "Pathankot",
			code: "IXP"
		},
		{
			city: "Patna",
			code: "PAT"
		},
		{
			city: "Pondicherry",
			code: "PNY"
		},
		{
			city: "Porbandar",
			code: "PBD"
		},
		{
			city: "Port Blair",
			code: "IXZ"
		},
		{
			city: "Pune",
			code: "PNQ"
		},
		{
			city: "Puttaparthi",
			code: "PUT"
		},
		{
			city: "Raipur",
			code: "RPR"
		},
		{
			city: "Rajahmundry",
			code: "RJA"
		},
		{
			city: "Rajkot",
			code: "RAJ"
		},
		{
			city: "Rajouri",
			code: "RJI"
		},
		{
			city: "Ramagundam",
			code: "RMD"
		},
		{
			city: "Ranchi",
			code: "IXR"
		},
		{
			city: "Ratnagiri",
			code: "RTC"
		},
		{
			city: "Rewa",
			code: "REW"
		},
		{
			city: "Rourkela",
			code: "RRK"
		},
		{
			city: "Rupsi",
			code: "RUP"
		},
		{
			city: "Salem",
			code: "SXV"
		},
		{
			city: "Satna",
			code: "TNI"
		},
		{
			city: "Shillong",
			code: "SHL"
		},
		{
			city: "Sholapur",
			code: "SSE"
		},
		{
			city: "Silchar",
			code: "IXS"
		},
		{
			city: "Simla",
			code: "SLV"
		},
		{
			city: "Srinagar",
			code: "SXR"
		},
		{
			city: "Surat",
			code: "STV"
		},
		{
			city: "Tezpur",
			code: "TEZ"
		},
		{
			city: "Tezu",
			code: "TEI"
		},
		{
			city: "Thanjavur",
			code: "TJV"
		},
		{
			city: "Thiruvananthapuram",
			code: "TRV"
		},
		{
			city: "Tiruchirapally",
			code: "TRZ"
		},
		{
			city: "Tirupati",
			code: "TIR"
		},
		{
			city: "Tuticorin",
			code: "TCR"
		},
		{
			city: "Udaipur",
			code: "UDR"
		},
		{
			city: "Vadodara",
			code: "BDQ"
		},
		{
			city: "Varanasi",
			code: "VNS"
		},
		{
			city: "Vijayawada",
			code: "VGA"
		},
		{
			city: "Visakhapatnam",
			code: "VTZ"
		},
		{
			city: "Warangal",
			code: "WGC"
		}
	]
};

module.exports = config;