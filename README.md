# notifi
A simple web interface for displaying the data collected from the booking application on www.frizeriamica.ro


This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Dependencies
`npm install`<br>
    "express": "^4.15.2",<br>
    "mongodb": "^2.2.26"<br>
`bower install`<br>
"angular": "^1.4.0",<br>
    "bootstrap": "^3.2.0",<br>
    
## Build & development
Run `node hibrid.js` to start the backend server <br>
Run `grunt` for building and `grunt serve` for preview.

## Hibrid.js
An express server that listens on port `3000` for frontend requests and connects to a mongodb instance open on port 27017 trough the mongodb javascript API.

## Testing

Running `grunt test` will run the unit tests with karma.
