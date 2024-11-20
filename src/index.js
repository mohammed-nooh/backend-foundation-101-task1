require('dotenv').config();
const express=require("express");


const app=express();

const PORT = process.env.PORT || 3000;

app.use(express.json());



app.get('/hello',(req,res)=>{
    console.log("welcome to task1");
    res.status(200).json('welcome to task 1');
})

app.get('/time',(req,res)=>{
    const time=new Date().toISOString();
    res.status(200).json(`current time is ${time}`);
})

app.get('/health',(req,res)=>{
    const data={
        uptime:process.uptime(),
        message:"ok",
        responseTime:process.hrtime(),
        date:new Date().toLocaleString()
    }
    res.status(200).json(data);
})

app.post('/echo',(req,res)=>{
    res.status(200).json(req.body);
})


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!23' });
  });


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });