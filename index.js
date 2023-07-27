import express from 'express';

const app = express();

app.get('/', function(req, res){
    res.send('Hello from my API!..')
})

app.get('/api/greet/:username', function(req, res){
    console.log(req.params);
    const username = req.params.username;
    res.json({
        message : `Hello, ${username}!`
    })
});

const PORT = process.env.PORT || 4009

app.listen(PORT, function(){
    console.log(`app started on port ${PORT} `)
});
