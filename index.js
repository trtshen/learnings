const vimeo = require('vimeo').Vimeo;
const config = require('./config').vimeo;

console.log(vimeo);
const {
	client_id,
	client_secret,
	access_token,
} = config;
let client = new vimeo(`${client_id}`, `${client_secret}`, `${access_token}`);

client.request({
  method: 'GET',
  path: '/tutorial'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  console.log(body);

  const message = 'Success! You just interacted with the Vimeo API. Your dev environment is configured correctly, and the client ID, client secret, and access token that you provided are all working fine.';
  if (body.message === message) {
  	console.log('Setup successful!');
  }
})