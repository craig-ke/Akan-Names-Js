function main() {
	var Day= document.getElementById("day-of-birth").value;
	var Month = document.getElementById("month-of-birth").value;
	var Year = document.getElementById("year-of-birth").value;



	alert(dayOfTheWeek);
	let dayOfTheWeek=["Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
	let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


	if(document.getElementById('male').checked) {
		var gender = 'male';
	} else {
		var gender = 'female';
	}
	 alert(gender);

	if(day < 1 || day > 31) {
		alert("You have entered an invalid date!");
	}
	else if(month < 1 || month > 13) {
		alert("You have entered an invalid month!")
	}
	else if(year.length!=4) {
		alert("Invalid Year")
	}
	else if(gender === 'male' , dayOfTheWeek === 0) {
		alert("Your Akan name is " + maleAkanNames[0]);
	}
	else if(gender === 'male' , dayOfTheWeek === 1) {
		alert("Your Akan name is " + maleAkanNames[1]);
	}
	else if(gender === 'male' , dayOfTheWeek === 2) {
		alert("Your Akan name is " + maleAkanNames[2]);
	}
	else if(gender === 'male' , dayOfTheWeek === 3) {
		alert("Your Akan name is " + maleAkanNames[3]);
	}
	else if(gender === 'male' , dayOfTheWeek === 4) {
		alert("Your Akan name is " + maleAkanNames[4]);
	}
	else if(gender === 'male' , dayOfTheWeek === 5) {
		alert("Your Akan name is " + maleAkanNames[5]);
	}
	else if(gender === 'male' , dayOfTheWeek === 6) {
		alert("Your Akan name is " + maleAkanNames[6]);
	}
	else if(gender === 'female' , dayOfTheWeek === 0) {
		alert("Your Akan name is " + femaleAkanNames[0]);
	}
	else if(gender === 'female' , dayOfTheWeek === 1) {
		alert("Your Akan name is " + femaleAkanNames[1]);
	}
	else if(gender === 'female' , dayOfTheWeek === 2) {
		alert("Your Akan name is " + femaleAkanNames[2]);
	}
	else if(gender === 'female' ,  dayOfTheWeek === 3) {
		alert("Your Akan name is " + femaleAkanNames[3]);
	}
	else if(gender === 'female' , dayOfTheWeek === 4) {
		alert("Your Akan name is " + femaleAkanNames[4]);
	}
	else if(gender === 'female' , dayOfTheWeek === 5) {
		alert("Your Akan name is " + femaleAkanNames[5]);
	}
	else if(gender === 'female' , dayOfTheWeek === 6) {
		alert("Your Akan name is " + femaleAkanNames[6]);
	}
	else {
		alert("Error processing your akan name!")
	}
	
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
