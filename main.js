if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
};

var curDate = new Date().toLocaleString().split(',')[0].replaceAll('/','');

var write = document.getElementById('write');
var counter = document.getElementById('counter');

document.getElementById('date').innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}) ;

if( localStorage.getItem(curDate) !== null ) {
  write.value = localStorage.getItem(curDate).replaceAll('/',"\n");
  updateCounter();
} else {
  localStorage.clear();
}

write.addEventListener("keyup", function() {
  localStorage.setItem(curDate, write.value.replaceAll("\n",'/'));
  updateCounter();
}); 

function updateCounter() {
  counter.innerHTML = write.value.trim().split(/\s/).length;
}
