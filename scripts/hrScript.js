var userList=[];
function addEmp() {
	var hemail=document.getElementById("usermail").value;
	var hpass=document.getElementById("userpass").value;
	var comment=document.getElementById("comment").value;
	userList[userList.length]={em:hemail,pas:hpass,com:comment};
	if(userList[userList.length-1].em==hemail){
		document.getElementById("total").innerHTML=userList.length;
		var newItem = document.createElement("li");
		var textnode = document.createTextNode(userList[userList.length-1].em + " : " + userList[userList.length-1].com);
		newItem.appendChild(textnode);                  
		//var ulTag=document.getElementsByTagName("ul");
		newItem.style.color="red";
		newItem.style.fontSize="12px";
		newItem.style.listStyle="none";
		var list = document.getElementById('loginBlock');
		list.insertBefore(newItem, list.childNodes[22]);
	}
}
function loginEmp(){
	document.getElementById('loginBlock').style.visibility="hidden";
	document.getElementById('loginBlock').style.display="none";
	document.getElementById('userLogin').style.display="block";
	document.getElementById('userLogin').style.visibility="visible";
}
function validateEmp(){
	var empmail=document.getElementById("emailIn").value;
	var emppass=document.getElementById("passIn").value;
	for(i=0;i<userList.length;i++){
		if(userList[i].em==empmail && userList[i].pas==emppass){
			document.getElementById('userLogin').style.visibility="hidden";
			document.getElementById('userLogin').style.display="none";

			document.getElementById("setEmail").innerHTML=userList[i].em;
			document.getElementById("setPass").innerHTML=userList[i].pas;
			document.getElementById("setCom").innerHTML=userList[i].com;
			document.getElementById("setEmail").style.color="red";
			document.getElementById("setPass").style.color="red";
			document.getElementById("setCom").style.color="red";			

			document.getElementById('userData').style.display="block";
			document.getElementById('userData').style.visibility="visible";	
			break;		
		}
	}
	
}