let express = require('express') ;
let app = express();
let port = 3000;

app.use(express.static( __dirname + '/www') ) ;

app.set( 'view engine' , 'ejs') ;
app.use( '/views' , express.static( __dirname + '/views') ) ;

app.listen(port, ( ) => {
console.log('Le serveur est en route') ;
console.log( `Serveur listening at http://localhost:${port}`) ;
} )


app.get( '/' , ( req , res , next ) => {
    res.render('index.ejs') ;
        } ) ;
        
app.get( '/page2' , ( req , res , next ) => {
    res.render('page2.ejs') ;
} ) ;



app.use( '/js' , express.static( __dirname + '/node_modules/bootstrap/dist/js') ) ;
app.use( '/css' , express.static( __dirname + '/node_modules/bootstrap/dist/css') ) ;


