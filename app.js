const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

global.app = app;

const upload = require("./modules/upload/upload");

app.set('port', process.env.PORT || 8080);
app.set('root', __dirname);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => res.send("<h1>API is working</h1>"));
app.get('/get', require("./modules/get"));
app.get('/get/:id', require("./modules/create")); // URL : /get/101?name=user name&username=myusername
app.post('/post/:id', require("./modules/post"));

app.get('/scrapbook', require("./modules/scrapbook/scrapbook"));

app.get("/images", upload.imagesList)
app.get("/images/:imagename", upload.images)
app.post('/upload', upload.upload);

app.listen(app.get('port'), () => {
  console.log(`Server is running on ${app.get('port')}....`);
});