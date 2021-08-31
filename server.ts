import * as express from "express"
import * as session from "express-session";
import addProduct from "./models/controllers/addProduct"
import getProduct from "./models/controllers/getProducts"

const server = express();
const db = require('./db')()

server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use(session({
    secret : 'whyudodis',
    resave: false,
    saveUninitialized: true,
}));

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

server.get('/',(req,res)=>{
    res.send({response : 'Success'})
})

server.use('/publish', addProduct)
server.use('/getProduct', getProduct)

const PORT = process.env.PORT || 6979
server.listen(PORT,()=>{
    console.log('Server started at http://localhost:'+PORT);
})































// const { reservationInfo } = require('./db2');
// const passport = require('./passport');

// const root = require('./routes/root.js').route
// const admin = require('./routes/admin').route
// const cart = require('./routes/cart').route
// const Food = require('./routes/food').route
// const reservation= require('./routes/reservation').route
// const Employee = require('./routes/employee').route

//Setting View Engine as HBS
// server.set("view engine","hbs")

// server.use(exp.static('public'))

// //----------------------------------------------------Logout Handler-------------------------------------------//

// server.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/');
// });

// //--------------------------------------------------Error Page----------------------------------------------//
// server.get("/*",(req,res)=>{
//     res.render('errorPage')
// })
