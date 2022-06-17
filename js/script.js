function validasi() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var gender = document.getElementById("gender").value;
	var message = document.getElementById("message").value;


	if (name == "") {
        alert("Name Cannot Be Empty!");
        return false;
  	} 

  	if (email == "") {
        alert("Email Cannot Be Empty!");
        return false;
  	} 

  	if (gender == "") {
        alert("Gender Cannot Be Empty!");
        return false;
  	} 

  	if (message == "") {
        alert("Message Cannot Be Empty!");
        return false;
  	} 


  	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(email.value.match(mailformat)) {
		console.log('Success');
	}

	else {
		alert("You have entered an invalid email address!");
		return false;
	}

}

<script>
	var slideIndex = 1;
	displaySlide(slideIndex);

	function moveSlides(n) {
		displaySlide(slideIndex += n);
	}

	function activeSlide(n) {
		displaySlide(slideIndex = n);
	}

	/* Main function */
	function displaySlide(n) {
		var i;
		var totalslides =
			document.getElementsByClassName("slide");
		var totaldots =
			document.getElementsByClassName("footerdot");
		
		if (n > totalslides.length) {
			slideIndex = 1;
		}
		
		if (n < 1) {
			slideIndex = totalslides.length;
		}
		for (i = 0; i < totalslides.length; i++) {
			totalslides[i].style.display = "none";
		}
		for (i = 0; i < totaldots.length; i++) {
			totaldots[i].className =
			totaldots[i].className.replace(" active", "");
		}
		totalslides[slideIndex - 1].style.display = "block";
		totaldots[slideIndex - 1].className += " active";
	}
</script>
