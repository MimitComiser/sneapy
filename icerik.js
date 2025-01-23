document.addEventListener('DOMContentLoaded', function() {
    let headerText = document.getElementById('kAdi').textContent;
    let intervalId;
  
    function writeTitle() {
      let index = 0;
      return function() {
        if (index < headerText.length) {
          document.title = headerText.slice(0, index + 1);
          index++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            intervalId = setInterval(writeTitle(), 500);
          }, 2000);
        }
      };
    }
      intervalId = setInterval(writeTitle(), 200);
});


function kopyala(id) {
    var yazi = document.getElementById(id).textContent;
    navigator.clipboard.writeText(yazi);
}