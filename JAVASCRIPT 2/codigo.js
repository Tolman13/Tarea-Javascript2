document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("prueba");
    const contador = document.getElementById("contador");
  
    textarea.addEventListener("input", function () {
      const longitud = textarea.value.length;
      contador.textContent = longitud + " caracteres";
    });
  });