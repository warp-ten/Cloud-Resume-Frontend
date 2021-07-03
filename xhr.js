const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://f3n83h2nng.execute-api.us-east-1.amazonaws.com/prod/lambda-visit-count-function";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
  if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    // if http responce is 0 or betwen 200-399 (200-299=successful responce 300-399=redirect)
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      //console.log(xhr.responseText);
      document.getElementById("count").innerHTML=(xhr.responseText);
    } else {
      console.log('Resource not found.');
    }
  }
};
xhr.send();


