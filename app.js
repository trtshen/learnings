fetch('https://4d052q3ph6.execute-api.ap-southeast-2.amazonaws.com/notify', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'origin': 'http://localhost:4200/'
  },
  body: JSON.stringify({})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
  const result = document.getElementById('result');
  const childElement = document.createElement("p");
  childElement.innerHTML = (typeof err === 'string') ? err : err.toString();
  result.appendChild(childElement);
});
