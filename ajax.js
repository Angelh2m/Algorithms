

// *******************************
// Ajax tutorial
// *******************************

var btn = document.getElementById('button');
var img = document.getElementById('photo');


btn.addEventListener('click', function() {

  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {

      var url = JSON.parse(XHR.responseText).message;

      img.src = url

      // console.log(data.message);
    }
  }

  XHR.open('get', 'https://dog.ceo/api/breeds/image/random');
  XHR.send();

});


// var XHR = new XMLHttpRequest();
//
// XHR.onreadystatechange = function() {
//   if (XHR.readyState == 4) {
//     if (XHR.status == 200) {
//       console.log(XHR.responseText);
//     }else {
//       console.log('there is a problem');
//     }
//     // console.log('Ready state is ' + XHR.readyState);
//     // console.log(XHR.responseText);
//   }
// }
//
//
// XHR.open('GET', 'https://api.github.com/zen');
// XHR.send();
