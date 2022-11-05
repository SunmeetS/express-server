let express = require("express");
let routes = require("./database/routes")
let cron = require("node-cron")
const cors = require('cors');
const axios = require("axios");

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

app.use(
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);
app.options(
    '*',
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);

app.use(express.json());
app.use(routes);
//if you want in every domain then
