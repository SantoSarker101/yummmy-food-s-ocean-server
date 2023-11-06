const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) =>{
	res.send('yummmy-foods-ocean is running')
});

app.listen(port,() =>{
	console.log((`yummmy-food's-ocean is running on port: ${port}`));
})