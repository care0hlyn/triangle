var triangle = function(side1,side2,side3) {

if ((((side1 + side2) < side3) || ((side2 + side3) < side1) || ((side3 + side2) < side1))) {
	return "NOT A TRIANGLE";
} else if (side1 === side2 && side1 === side3) {
	return "EQUILATERAL";
} else if (side1 === side3 || side2 === side1 || side3 === side2) {
	return "ISOCELES"; 
} else if ((side1 !== side2 && side1 !== side3) && (side2 !== side3)) {
	return "SCALENE";
} else {
	return false;
}
};

$(document).ready(function(){
	$('form#triangle').submit(function(event){
		event.preventDefault();

	var side1 = parseInt($('input#side1').val());
	var side2 = parseInt($('input#side2').val());
	var side3 = parseInt($('input#side3').val());

	var result = triangle(side1, side2, side3);


	$(".type").text(result);
    $("#result").show();

	});
});
