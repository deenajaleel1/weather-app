import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended : true }));
// To give the direction that all static files like css and images are in the folder public
app.use(express.static("public"));


// To display the index.ejs file 
app.get("/", (req,res)=>{
    res.render("index.ejs", { weather:null , error:null });
});

app.post("/weather",async(req,res)=>{
    console.log("Form submitted");
    console.log("City received:", req.body.location);
    const location = req.body.location;
    try{
        //Geocoding API
        const geoResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.OPENWEATHER_API_KEY}`);
        if (geoResponse.data.length === 0){
            return res.render("index.ejs",{weather:null,error:"City or Country not found"});
        }
        const {lat,lon} = geoResponse.data[0];

        //Weather API
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
        const weather = weatherResponse.data;
        const mainCondition = weather.weather[0].main;
        let icon;
        if (mainCondition === "Clear") icon = "sun";
        else if(mainCondition === "Clouds") icon = "cloud";
        else if (mainCondition === "Rain" || mainCondition === "light rain") icon = "rain";
        else if (mainCondition === "Drizzle") icon = "rain";
        else if (mainCondition === "Thunderstorm") icon = "storm";
        else if (mainCondition === "Snow") icon = "snow";
        else if (mainCondition === "Mist" || mainCondition === "Haze" || mainCondition === "Fog") icon = "misty";
        const weatherData = {
            city:weatherResponse.data.name,
            country:weatherResponse.data.sys.country,
            temp:Math.round(weatherResponse.data.main.temp),
            condition:weatherResponse.data.weather[0].description,
            humidity:weatherResponse.data.main.humidity,
            wind:weatherResponse.data.wind.speed,
            icon:icon
        };
        console.log(weather.weather);
        res.render("index.ejs",{weather:weatherData,error:null});
    }catch(error){
        console.log("ERROR DETAILS:", error.response?.data || error.message);
        res.render("index.ejs",{weather:null,error:"Something went wrong"});
    }
});
// To run server
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});