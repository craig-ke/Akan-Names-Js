var getMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("mm").innerHTML = mm [d.getMonth()+1];
if ( form.checkValidity( '<o','>12' ) === false)

var getDay = new Date();
document.getElementById("dd").innerHTML = d.getDay();

var getYear = new Year();
document.getElementById("yyyy").innerHTML =[d.getYear()];

var getDay =new Day();
document.getElementById("day").innerHTML =[d.getDay]

 // Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
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
function 