$.getJSON('https://ipapi.co/json/', function(data) {
  console.log(JSON.stringify(data, null, 2));
  console.log(data.city)
});

/* TO just Get City */
  $.getJSON('https://ipapi.co/json/', function(data) {
  console.log(data.city);
  document.getElementById('Location').value = data.city;
  });
  
  
/*More Accurate Geo-Location*/
$.getJSON( '//ipinfo.io/json', function( data ) {
console.log( data.city + " " + data.postal);
});