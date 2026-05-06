(function(){

  // Jahr
  document.getElementById("year").textContent = new Date().getFullYear();

  // Öffnungszeiten
  var status = document.getElementById("status-text");

  var now = new Date();
  var h = now.getHours();
  var d = now.getDay();

  if(d === 0){
    status.textContent = "Heute geschlossen";
  } else if(h >= 9 && h < 19){
    status.textContent = "Jetzt geöffnet";
  } else {
    status.textContent = "Geschlossen";
  }

})();
