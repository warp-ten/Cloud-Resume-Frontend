const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://jily262ica.execute-api.us-east-2.amazonaws.com/default/testfunction";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
  if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    // if http responce is 0 or betwen 200-399 (200-299=successful responce 300-399=redirect)
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log(xhr.responseText);
    } else {
      console.log('Resource not found.');
    }
  }
};
xhr.send();

// xhr has different stages of a request 0-4
//   0 - unsent
//   1 - opened
//   2 - header recieved
//   3 - loading
//   4 - done

