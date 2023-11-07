const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefRecipesData = require('./data/chefs-recipes.json');

app.use(cors());

app.get('/', (req,res) =>{
	res.send('yummmy-foods-ocean is running')
});

app.get('/chef-recipes-all-data', (req, res) =>{
	res.send(chefRecipesData)
});

app.get('/chef-recipes-unic-data/:id', (req, res) =>{
	const id = parseInt(req.params.id);
	const selectedRecipeData = chefRecipesData.find(n => parseInt(n.id) === id);
		res.send(selectedRecipeData)
});

app.listen(port,() =>{
	console.log((`yummmy-food's-ocean is running on port: ${port}`));
})