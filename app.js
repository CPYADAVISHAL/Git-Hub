const express = require('express')

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/ASIGNUP.html');
})

app.listen(port, (req, res)=>{
    console.log(`Server is listening on port ${port}`)
})