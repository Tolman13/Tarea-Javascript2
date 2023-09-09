function cambiarColor(elemento) {
    if (elemento instanceof HTMLElement) { 
        var colorActual = window.getComputedStyle(elemento).backgroundColor;
        document.body.style.backgroundColor = colorActual;
    } else {
        console.error("El argumento pasado a la función no es un elemento HTML válido.");
    }
}