const flightFacts = {
	quotes: [
		"Many airlines have a rule that each pilot flying the aircraft eats a different meal, in order to minimise the risk of all pilots on board being ill.",
		"In 1987, American Airlines saved an estimated $40,000 by giving one less olive in each salad served in first class.",
		"A Boeing 747 is made up of six million parts.",
		"he longest flight is now a Delta flight between Johannesburg and Atlanta, which at 17 hours has the longest duration, while the longest route will be a Qantas flight between Sydney and Dallas — around 8,500 miles.",
		"The maximum speed of a Boeing 747 is 955 kilometers per hour.",
		"At any given hour, 61,000 people are airborne over the US.",
		"The oxygen in an airplane’s emergency oxygen masks lasts for only about 15 minutes",
		"English is the international language of flight. All flight controllers and all commercial pilots who fly on international flights are required to speak English.",
		"The world’s smallest jet is the BD-5 Micro. Its wingspan is 14–21 feet and weighs just 358 pounds.",
		"One windshield or window frame of a Boeing 747-400’s cockpit costs as much as a BMW.",
		"Airport control tower windows must be angled at precisely 15 degrees from vertical at the top to decrease reflections from both inside and outside the tower.",
		"The average Boeing 747 has around 150–175 miles of wiring inside it.",
		"Airplanes typically fly at an altitude of around 35,000 feet. If Earth were the size of a desktop globe, a plane at that height would be flying at only 1/10 of an inch off the surface.",
		"The world’s largest passenger plane is the Airbus A380. It is a double-decker four-engine jetliner. It made its first flight on April 27, 2005.",
		"The world’s fastest airplane is the Lockheed SR-71 Blackbird, flying at 2,193 miles per hour. It has held the record for nearly 40 years.",
		"According to Popular Mechanics, sitting in the tail of an airplane improves chances of accident survival by 40%",
		"Worldwide, the airline industry generates about US$640 billion.",
		"About 1 in 5 people have some of fear flying, or \“aviophobia.\”",
		"The air on airplanes is filtered by the same technology that filters air in hospitals, so while the tray table may harbor germs, the air is clean.",
		"When a plane lands at night, cabin crews will dim the interior lights. Why? In the unlikely event that the plane landing goes badly and passengers need to evacuate, their eyes will already be adjusted to the darkness.",
		"Flight attendants have passengers raise their window shades during landing, so they can see outside in an emergency and assess if one side of the plane is better for an evacuation.",
		"Those white lines that planes leave in the sky are simply trails of condensation, hence their technical name of “contrails.” Plane engines release water vapor as part of the combustion process.",
		"Air India was originally Tata Airlines in 1932, after which a majority of it was bought over by the Government in World War 2.",
		"Domestic flights in India don’t serve liquor on domestic flights, unless it’s leaving the country soon after its local stop.",
		"Kerala has 3 of the 14 International Airports in India.",
		"The Subhash Chandra Bose airport in Kolkata was initially called ‘Dum Dum Airport’, until it was renamed after India’s freedom fighter",
		"The Indira Gandhi International Airport in Delhi is the busiest airport in India.",
		"Air India One (Flight no. AI 1, always) is a Boeing 747-400 aircraft used to carry the President, the PM and Vice President of India Overseas.",
		"Air India has been rated the world's third-most unsafe commercial airline by a German airline safety think-tank in a ranking that was debunked by the national carrier.",
		"There are around 7,000 flights in the air at any one time",
		"There are no less than 20 flights per day between New York and London"
	],
	getRandomFact: function () {
		let i = Math.floor(Math.random() * this.quotes.length);
		return(this.quotes[i]);
	}
};

module.exports = flightFacts;