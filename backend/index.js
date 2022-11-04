const express=require('express');
// initializing express app


const app=express();

const userRouter=require('./router/userRouter');
const cors=require('cors');
const musicRouter=require('./router/musicrouter');
const utilRouter=require('./router/util');
//middleware-a middleware can only intercept arequest to chnge its content or forward anywhere

app.use(express.json());
app.use(cors({origin:['http://localhost:3000']}))

app.use('/user',userRouter);
app.use('/music',musicRouter);
app.use('/util',utilRouter);

const port=5000;

//these below lines are routes,a route can accept request and forward generate its reponse
app.get('/',(req,res)=>{res.send('response from express!');});
app.get('/home',(req,res)=>{res.send('response from express home!');});

// starting the server
app.listen(port,()=>console.log('server started '));