var hrEmail="hr@cronj.com";
var hrPass="hrcronj";
var emps={};
var testvalue=2;
function validateHR() {
	var email=document.getElementById("usermail").value;
	var pass=document.getElementById("userpass").value;
	if(email==hrEmail && pass==hrPass) {
			alert("Logged In!");
			loggedIn(email,pass);
	}
	else
		alert("Wrong Email and password!");
}
function loggedIn(usermail,userpass){
	testvalue=555;
	window.location='hrHome.html';	
}