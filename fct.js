const deconstruct = function(snowflake) {
	const BINARY = idToBinary(snowflake).toString(2).padStart(64, '0');
	const res = {
		timestamp: parseInt(BINARY.substring(0, 42), 2) + EPOCH,
		workerID: parseInt(BINARY.substring(42, 47), 2),
		processID: parseInt(BINARY.substring(47, 52), 2),
		increment: parseInt(BINARY.substring(52, 64), 2),
		binary: BINARY
	};
	Object.defineProperty(res, 'date', {
		get: function get() {
			return new Date(this.timestamp);
		},
		enumerable: true,
	});
	return res;
}

function daate(date1) {
	if (!date1) return undefined;
	
	let jour = date1.getDate();
	if (jour < 10) jour = "0"+jour;
	let jour2 = date1.getDate();
	if (jour2 === 1) jour2 = '1er';
	
	let mois = date1.getMonth();
	let mois2 = '?';
	mois2 = mois++;
	mois = mois < 9 ? "0"+String(mois+1) : String(mois+1);
	
	let année2 = date1.getFullYear();
	let année = année2.toString().substring(2);
	
	let heure = date1.getHours();
	if (heure < 10) heure = "0"+heure;
	
	let min = date1.getMinutes();
	if (min < 10) min = "0"+min;
	
	let now = new Date(),
		x1, x2, x3, x4, x5, wola;
	
	let time1 = date1.getTime(),
		time2 = now.getTime();
    
	let agoMilliseconds;
	
	if (time1 > time2) agoMilliseconds = time1-time2, wola = "Dans";
	if (time1 < time2) agoMilliseconds = time2-time1, wola = "Il y a";
	if (time1 === time2) agoMilliseconds = 0;
	
	let agoSeconds = agoMilliseconds / 1000;
	
	let truncSeconds = Math.trunc(agoSeconds),
		testMilliseconds = agoSeconds - truncSeconds,
		testMilliseconds2 = testMilliseconds * 1000,
		milliseconds = Math.round(testMilliseconds2);
	
	truncSeconds > 1 ? x1 = "s" : x1 = "️";
	
	if (truncSeconds <= 0) return `${wola} ${agoMilliseconds} milliseconde${agoMilliseconds > 1 ? "s" : "️"}.`;
	let abc = truncSeconds+" seconde"+x1;
	
	let agoMinutes = truncSeconds / 60,
		truncMinutes = Math.trunc(agoMinutes),
		testSeconds = agoMinutes - truncMinutes,
		testSeconds2 = testSeconds * 60,
		seconds = Math.round(testSeconds2);
	
	seconds > 1 ? x1 = "s" : x1 = "️";
	truncMinutes > 1 ? x2 = "s" : x2 = "️";
	
	if (truncMinutes <= 0) return `${wola} ${abc}`;
	abc = truncMinutes+" minute"+x2
	
	let agoHours = truncMinutes / 60,
		truncHours = Math.trunc(agoHours),
		testMinutes = agoHours - truncHours,
		testMinutes2 = testMinutes * 60,
		minutes = Math.round(testMinutes2);
	
	minutes > 1 ? x2 = "s" : x2 = "️";
	truncHours > 1 ? x3 = "s" : x3 = "️";
	
	if (truncHours <= 0) return `${wola} ${abc}`;
	abc = truncHours+" heure"+x3
	
	let agoDays = truncHours / 24,
		truncDays = Math.trunc(agoDays),
		testHours = agoDays - truncDays,
		testHours2 = testHours * 24,
		hours = Math.round(testHours2);
	
	hours > 1 ? x3 = "s" : x3 = "️";
	truncDays > 1 ? x4 = "s" : x4 = "️";
	
	if (truncDays <= 0) return `${wola} ${abc}`;
	abc = truncDays+" jour"+x4
	
	let agoMonths = truncDays / 30.4167,
		truncMonths = Math.trunc(agoMonths),
		testDays = agoMonths - truncMonths,
		testDays2 = testDays * 30.4167,
		days = Math.round(testDays2);
	
	days > 1 ? x4 = "s" : x4 = "️";
	
	if (truncMonths <= 0) return `${wola} ${abc}`;
	abc = truncMonths+" mois, "+days+" jour"+x4
	
	let agoYears = truncMonths / 12,
		truncYears = Math.trunc(agoYears),
		testMonths = agoYears - truncYears,
		testMonths2 = testMonths * 12,
		months = Math.round(testMonths2);
	
	truncYears > 1 ? x5 = "s" : x5 = "️";
	
	if (truncYears <= 0) return `${wola} ${abc}`;
	abc = truncYears+" an"+x5+", "+months+" mois, "+days+" jour"+x4
	
	return `${wola} ${abc}`;
}

function idToBinary(num) {
	let bin = '';
	let high = parseInt(num.slice(0, -10)) || 0;
	let low = parseInt(num.slice(-10));
	while (low > 0 || high > 0) {
		bin = String(low & 1) + bin;
		low = Math.floor(low / 2);
		if (high > 0) {
			low += 5000000000 * (high % 2);
			high = Math.floor(high / 2);
		}
	}
	return bin;
}

const EPOCH = 1420070400000;

module.exports = {
    daate
}