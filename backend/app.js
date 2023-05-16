const express = require('express')
const app=  express();
const mongoose = require('mongoose')
const morgan =  require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config();
var cors =  require('cors')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleware/error')
const path = require('path')


const _dirname = path.dirname("")
const buildPath =  path.join(_dirname, "../frontend/build");

app.use(express.static(buildPath))

app.get("/*", function(req,res){

    res.sendFile(
        path.join(__dirname, "../frontend/build/index.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    )
})


//database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected...");
}).catch((err)=>{
    console.log(err)
})


//MIDDLEWARE 
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}))
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended:true
}));
app.use(cookieParser())
app.use(cors())


//Import Routes
const authRoutes = require('./routes/authroutes')
const userRoutes = require('./routes/userRoutes');
const JobsTypeRoutes = require('./routes/jobsTypeRoutes');
const jobRoute = require('./routes/jobsRoutes');


//routes
app.use('/api/v1',authRoutes)
app.use('/api/v1', userRoutes);
app.use('/api/v1', JobsTypeRoutes);
app.use('/api/v1', jobRoute);

//custom error middleware
app.use(errorHandler);

//port
const port =  process.env.PORT || 8000



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})


