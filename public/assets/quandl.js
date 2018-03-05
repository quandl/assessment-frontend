// LOG LINK CLICKS
$("a").click(function(){
	console.log("clicked!");
})

// DATA TABLE ROW NUMBERING
var row = $(".first-col"),
		i = 0;

row.each(function(i,e) {
	if (i > 0) {
		$(e).text(i.toString());
		i++;
	}
});

// DATA TABLE DATE FORMATTING
var dates = $(".per-end-date, .eps-rev-date, .eps-rev-date-prev");

dates.each(function(i,e) {
	var d = $(e).text();

	$(e).text(d.slice(2,));
	// $(e).text();
});

// DATA OVERVIEW TEXT FORMATTING
var delFreq = $(".del-freq").text(),
		dataFreq = $(".data-freq").text(),
		hist = $(".hist").text(),
		coverage = $(".coverage").text();

$(".del-freq").text(capitalize(delFreq));
$(".data-freq").text(capitalize(dataFreq));
$(".hist").text(dateConvert(hist));
$(".coverage").text(commaSeparate(coverage));

function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function dateConvert(date) {
	var units = date.split('-');
	var newDate = new Date(units[0], units[1] - 1, units[2]); 
	newDate = newDate.toDateString();
	return newDate.slice(4,8) + newDate.slice(-4);
}

function commaSeparate(text) {
	var units = coverage.split('+'),
			unitLength = units[0].length,
			numComp = '',
			newText,
			j = 0;

	if (unitLength > 3) {
		for (var i = unitLength-1; i >= 0; i--){
			j++;
			if (j % 3 === 0 && i !== 0) {
				numComp = ',' + units[0].charAt(i) + numComp;
			} else {
				numComp = units[0].charAt(i) + numComp;
			}
		}
	}

	return newText = numComp + '+ ' + units[1];
}
