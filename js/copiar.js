var boton_copiar = document.getElementById('btn_copiar');

boton_copiar.addEventListener('click', function(){
  var parrafo = document.querySelector('.texto_derecha').innerHTML;

  if(!navigator.clipboard){
    return ;
  }
    try{
      navigator.clipboard.writeText(parrafo);
      boton_copiar.textContent = '¡Texto copiado!';
      boton_copiar.style.backgroundColor = '#93c0f7';
    } catch(err){
      console.log('No se pudo copiar al portapapeles', err);
      }          
});