
// window.onload = () => {
//     console.log('window loaded');
//     const getData = () => {
//         const xhr = new XMLHttpRequest();
//         // This prepares for a request to be sent. It does not make the request
//         xhr.open('GET','https://reqres.in/api/users?page=2');
        
//         // This will accept json data and parse it into javascript data
//         xhr.responseType = 'json';

//         // When a responce loads this will trigger (xhr.onload) 
//         xhr.onload = () => {
//             const data = xhr.response;
//             console.log(data);
//         };
//         // Sends the request that xhr.open set up
//         xhr.send();
//     };
// }

const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://reqres.in/api/users/2";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
  if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log(xhr.responseText);
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xhr.send();