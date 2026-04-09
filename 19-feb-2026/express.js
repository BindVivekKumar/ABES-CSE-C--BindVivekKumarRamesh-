const express=require('express');
const app=express();
const port=8080;
app.get('/',(req,res)=>{
  res.send('GET request to the homepage');
});
app.post('/',(req,res)=>{
  res.send('Post request to the homepage');
});
app.get('/about',(req,res)=>{
  res.send(' about page');
});
app.all('*',(req,res)=>{
  res.status(404).send('404-page not found');
});
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});