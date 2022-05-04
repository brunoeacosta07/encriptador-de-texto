var input_texto = document.getElementById('input_texto');


input_texto.addEventListener('input', function(){
  var texto_grande = document.querySelector('.p_mensaje_vacio');

  if(this.value.length > 0){
    texto_grande.textContent = 'Presione Encriptar / Desencriptar';

  }else{
    texto_grande.textContent = 'Ningún mensaje fue encontrado';
    document.querySelector('.sin_elementos').style.display = 'grid';
    document.querySelector('.con_elementos').style.display = 'none';
  }

});
