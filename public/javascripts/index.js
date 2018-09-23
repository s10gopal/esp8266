$(document).ready(function () {

  var ws = new WebSocket('wss://' + location.host);
 /* ws.onopen = function () {
    console.log('Successfully connect WebSocket');
  } */
  ws.onmessage = function (message) {
   $('#data').append('<li>'+ message.data+'</li>');
  }
});
