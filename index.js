let express = require("express");
let routes = require("./database/routes")
let cron = require("node-cron")
const cors = require('cors');
const axios = require("axios");
const corsOption = {
    origin: '*'
};

// cron.schedule("*/30 * * * * *", function() {
    // axios.post('http://localhost:3001/addLinks').then((res) => {
    //     console.log("Hello from axios")
    //     console.log(res.data)
    // }); 
// });

let app = express();

app.listen(process.env.PORT || 3001, () => {
    console.log("Server listening on Port", 3001);
})

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use(express.json());
app.use(routes);
app.use(cors(corsOption));
//if you want in every domain then
app.use(cors())