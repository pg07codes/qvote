const express = require('express');
const path = require('path');
require('./models')
const router = require('./routes')

const app = express();

app.use(express.static(path.join(__dirname, './../build')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/qvote',router.qvoteRoute);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './../build', 'index.html'));
});

const PORT = process.env.PORT || 8080 ;

app.listen(PORT,()=>{
    console.log(`up at http://localhost:${PORT}`)
});