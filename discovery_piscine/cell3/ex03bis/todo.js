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

function newElement() {
	const ftList = $("#ft_list");
	var input = prompt("Añadir a la lista");
	if (input == null || input == "") {
		return;
	}
	var toDo = $("<li>").text(input);
	setCookie(input, input);
	toDo.on('click', function() {
		if (deleteItem()) {
			$(this).remove();
		}
	});
	ftList.prepend(toDo);
}

function deleteItem() {
	let wantRemove = confirm("¿Desea eliminar este elemento de la lista?");
	return wantRemove;
}
