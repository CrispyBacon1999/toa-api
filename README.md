<div align="center">
<img width="100" height="100" src="http://theorangealliance.org/assets/imgs/favicon.png">
<h1>The Orange Alliance API</h1>
<p>NodeJS API for The Orange Alliance</p>
<small><a href="https://theorangealliance.org/apidocs" target="_blank">API Docs</a></small>

</div>

> Note: Only supports the GET api currently.

## Usage

Using the API is simple. Just create an instance of the API class, passing in your auth key and the name of your app. From there, call any of the methods to retrieve the data from the API.

```ts
import API from 'toa-api';


let api = new API("YOUR_AUTH_KEY_HERE", "Name your app");

// All the requests will return promises of the model.
let event = await api.getEvent("1920-FIM-FIMFS1");
// OR
api.getEvent("1920-FIM-FIMFS1").then(event => {
    // Do Something
});
```