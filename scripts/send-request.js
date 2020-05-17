const fetch = (url, requestType = 'GET', body = null) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(requestType, url);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.responseType = 'json';

    xhr.send(JSON.stringify(body));

    xhr.onerror = (e) => {
      reject(e);
    };

    xhr.onload = () => {
      resolve(xhr.response);
    };
  });
};

fetch('http://localhost:3000/posts').then(response => {
  console.log(response);
  fetch(
    'http://localhost:3000/posts',
    'POST',
    {id: response.length + 1, title: "json-server6", author: "typicode6"}
    ).then( () => {
    fetch('http://localhost:3000/posts').then(response => {
      console.log(response);
    });
  });
});
