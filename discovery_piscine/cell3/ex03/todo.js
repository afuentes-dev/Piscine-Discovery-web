function setCookie(cname, cvalue) {
	const d = new Date(2068, 1, 2, 11, 20);
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; expires=" + expires + ";path=/";
  }
  
  function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }
  
  function checkCookie() {
	let user = getCookie("username");
	if (user != "") {
	  alert("Welcome again " + user);
	} else {
	  user = prompt("Please enter your name:", "");
	  if (user != "" && user != null) {
		setCookie("username", user, 365);
	  }
	}
  }

function newElement(){
	const ftList = document.getElementById("ft_list");
	var toDo = document.createElement("li");
	var input = prompt("Añadir a la lista");
	var text = document.createTextNode(input);
	setCookie(input, input);
	toDo.appendChild(text);
	if (input == null || input == "") {
		return;
	}
	ftList.insertBefore(toDo, ftList.firstChild);
	toDo.addEventListener('click', function (){
		if (deleteItem() == true) {
			toDo.remove();
		}
	});
}

function deleteItem(){
	let wantRemove = confirm("¿Desea eliminar este elemento de la lista?");
	if (wantRemove == true) {
		return (wantRemove);
	} else {
		return (wantRemove);
	}
}