var userList=[];
function addEmp() {
	var email=document.getElementById("usermail").value;
	var pass=document.getElementById("userpass").value;
	var comment=document.getElementById("comment").value;
	userList[userList.length]={em:email,pas:pass,com:comment};
	alert(email);
	if(userList[userList.length-1].em==email){
		document.getElementById("total").innerHTML=userList.length;

		var newItem = document.createElement("li");
		var textnode = document.createTextNode(userList[userList.length-1].em + " : " + userList[userList.length-1].com);
		newItem.appendChild(textnode);                  

		var list = document.getElementById('loginBlock');
		list.insertBefore(newItem, list.childNodes[20]);
	}
}