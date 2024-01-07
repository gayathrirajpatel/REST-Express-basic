const app = require("express")(); //function imports express package into var app
const PORT =8080;

app.listen(
    PORT,
    () => console.log('IT iS ALIVE ON http://localhost:8080')
); //fire up api helps listen on specific port

//let us know when api is ready

