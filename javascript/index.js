function day (cc,yy,mm,dd){
	return ((((cc/19)+1*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
}
function onClick(){
	let year = document.getElementById("year").value;
	let Month = document.getElementById("month").value;
	let day = document.getElementById("day").value;
	let maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	let femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
	let craig = new Date();
	craig.setDate(parseInt(day));
	craig.setMonth(parseInt(Month)-1);
	craig.setFullYear(parseInt(year));
	var p = craig.getDay();

	if(p===0){
			alert("Sunday");

	}else if(p===1){
			alert("Monday");

	}else if(p===2){
			alert("Tuesday");

	}else if(p===3){
			alert("Wednesday");

	}else if(p===4){
			alert("Thursday");

	}else if(p===5){
			alert("Friday");

	}else if(p===6){
			alert("Saturday");
	}
	if(year==""<1950 || year >2056){
			alert("insert a valid year");

	}else if(Month=="" <1 ||Month >12){
			alert("Enter a valid month");

	}else if(day=="" <1 ||day >31){
			alert("Enter a valid month");

	}else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
			alert("Your Akan name is " + maleName[p]);

	}else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
			alert("Your Akan name is " + femaleName[p]);
	}
}
