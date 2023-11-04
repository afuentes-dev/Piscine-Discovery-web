$(document).ready(function() {
    $("#newtodo").click(function() {
        var textoIngresado = prompt("Introduce un texto:");
        if (textoIngresado !== null) {
            var contenedor = $("#ft_list");
            var nuevaTarea = $("<li>").text("Tarea: " + textoIngresado);

            var confirmar = confirm("¿Seguro que deseas agregar esta tarea?");
            if (confirmar) {
                contenedor.prepend(nuevaTarea);
                setCookie("respuestas", contenedor.html(), 365);
            }
        }
    });

    function cargarRespuestasDesdeCookie() {
        var contenedor = $("#ft_list");
        var respuestas = getCookie("respuestas");
        if (respuestas) {
            contenedor.html(respuestas);
        }
        console.log("Respuestas cargadas: " + contenedor.html());
    }

    function setCookie(nombre, valor, dias) {
        var fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        var expira = "expires=" + fecha.toUTCString();
        document.cookie = nombre + "=" + valor + "; " + expira;
    }

    function getCookie(nombre) {
        var nombreC = nombre + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(nombreC) == 0) {
                return cookie.substring(nombreC.length, cookie.length);
            }
        }
        return "";
    }

    $("#ft_list").on("click", "li", function() {
        var tarea = $(this);
        var confirmar = confirm("¿Seguro que deseas eliminar esta tarea?");
        if (confirmar) {
            tarea.remove();
            setCookie("respuestas", $("#ft_list").html(), 365);
        }
    });

    cargarRespuestasDesdeCookie();
});


