var boton_encriptar = document.getElementById('btn_encriptar');
var parrafo = document.querySelector('.texto_derecha');


boton_encriptar.addEventListener('click', function(){
  var sin_elementos = document.querySelector('.sin_elementos');
  var con_elementos = document.querySelector('.con_elementos');

  boton_copiar.textContent = 'Copiar'; //Declarado en copiar.js
  boton_copiar.style.backgroundColor = '#fff';

  if(input_texto.value.length > 0){
    sin_elementos.style.display = 'none';
    con_elementos.style.display = 'grid';
  }
  var texto_cifrado = encriptar(input_texto);
  parrafo.textContent = texto_cifrado;
  
});


function encriptar(input){
  var texto = input.value.toLowerCase();
  
  //i es para obviar diferencias entre mayusculas y minusculas
  //g es para recorrer toda la palabra u oracion
  //m es para recorrer multiples lineas
  var texto_cifrado = texto.replace(/e/gm, 'enter');
  texto_cifrado = texto_cifrado.replace(/o/gm, 'ober');
  texto_cifrado = texto_cifrado.replace(/i/gm, 'imes');
  texto_cifrado = texto_cifrado.replace(/a/gm, 'ai');
  texto_cifrado = texto_cifrado.replace(/u/gm, 'ufat');

  return texto_cifrado;
}