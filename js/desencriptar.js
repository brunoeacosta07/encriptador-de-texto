var boton_desencriptar = document.getElementById('btn_desencriptar');
var parrafo = document.querySelector('.texto_derecha');


boton_desencriptar.addEventListener('click', function(){
  var sin_elementos = document.querySelector('.sin_elementos');
  var con_elementos = document.querySelector('.con_elementos');

  boton_copiar.textContent = 'Copiar'; //Declarado en copiar.js 
  boton_copiar.style.backgroundColor = '#fff';

  if(input_texto.value.length > 0){
    sin_elementos.style.display = 'none';
    con_elementos.style.display = 'grid';
  }
  var texto_cifrado = desencriptar(input_texto);
  parrafo.textContent = texto_cifrado;
  
});


function desencriptar(input){
  var texto = input.value.toLowerCase();
  
  //i es para obviar diferencias entre mayusculas y minusculas
  //g es para recorrer toda la palabra u oracion
  //m es para recorrer multiples lineas
  var texto_cifrado = texto.replace(/enter/gm, 'e');
  texto_cifrado = texto_cifrado.replace(/ober/gm, 'o');
  texto_cifrado = texto_cifrado.replace(/imes/gm, 'i');
  texto_cifrado = texto_cifrado.replace(/ai/gm, 'a');
  texto_cifrado = texto_cifrado.replace(/ufat/gm, 'u');

  return texto_cifrado;
}