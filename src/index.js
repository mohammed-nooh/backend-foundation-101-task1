const express=require("express");


const app=express();


app.use(welcomeHandler);

function welcomeHandler(req,res,next){
    console.log("welcome bro");
    next();
}


app.get('/hello',(req,res)=>{
    console.log("welcome to task1");
    res.status(200).json('welcome to task 1');
})

app.get('/time',(req,res)=>{
    console.log(new Date().toLocaleString());
    const user=req.query.name;
    const time=new Date().toLocaleString();
    res.status(200).json(`the name is ${user} and time is ${time}`);
})



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!23' });
  });


  app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });