const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const data = require('./data/data.json')

app.use(cors());
app.get('/', (req,res)=>{
    res.send('Recipe Book is running')
})

app.get('/data', (req,res)=>{
    res.send(data)
})

app.get('/data/:id',(req,res)=>{
    const id = req.params.id;
    const  selectedChef= data.find(food=> food.id == id)
    res.send(selectedChef);
})

app.listen(port, ()=>{
    console.log(`Recipe book api is running on port: ${port}`)
})