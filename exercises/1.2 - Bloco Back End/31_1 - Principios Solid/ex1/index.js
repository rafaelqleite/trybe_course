const express = require('express');
const bodyParser = require('body-parser');

const plantsModule = require("./plants.js");

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/plants', (req, res) => {

  res.send(plantsModule.getPlants());

});

app.get('/plant/:id', (req, res) => {

  const { id } = req.params;
  res.send(plantsModule.getPlantById(parseInt(id,10)));

});

app.delete('/plant/:id', (req, res) => {

  const { id } = req.params;
  res.send(plantsModule.removePlantById(parseInt(id,10)));

});

app.post('/plant/:id', (req, res) => {

  const { id } = req.params;
  const newPlant = req.body.plant;

  res.send(plantsModule.editPlant(parseInt(id,10), newPlant));

});

app.post('/plant', (req, res) => {

  const newPlant = req.body.plant;
  res.send(plantsModule.createNewPlant(newPlant));
});


app.get('/sunny/:id', (req, res) => {

  const { id } = req.params;
  res.send(plantsModule.getPlantsThatNeedsSunWithId(parseInt(id,10)));
});

app.listen(PORT, () => {
  console.log(`Estou monitorando a porta: ${PORT}`);
});
