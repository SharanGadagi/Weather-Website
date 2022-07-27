const express = require('express');
const app = express();
const hbs=require('hbs')
const path=require('path');
const port = process.env.PORT;
//serving file path
const staticpath=path.join(__dirname, "../public")
const templates_path=path.join(__dirname, "../templates/views")
const partials_path=path.join(__dirname, "../templates/partials")


app.set("view engine", "hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path)
app.use(express.static(staticpath));

app.get("/", (req, res) => {
    res.render('index.hbs')
})
app.get("/about", (req, res) => {
    res.render('about.hbs');
})

app.get("/weather", (req, res) => {
    res.render('weather.hbs');
})
app.get("*",(req,res)=>{
    res.render('error.hbs');
})





app.listen(port, () => {
    console.log(`listening on port:http://localhost:${port}`);
})