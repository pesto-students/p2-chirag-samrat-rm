const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express();

const weatherData = require('../utils/weatherData')

const forcastData = require('../utils/forcastData')

const port = process.env.PORT || 3000


app.get('/',(req,res)=>{
    res.send('This is a Weather forecast App')
})


app.get('/weather',(req,res)=>{
    const address = req.query.address

    if(!address){
        return res.send({
            error : 'Enter your city name !'
        })
    }

    weatherData(address, (error,{temprature,description,cityName}) => {
        if(error){
            return res.send({
                error
            })
        }
        res.send({
            temprature,
            description,
            cityName,
        })
    })
})
app.get('/forcast',(req,res)=>{
    const address = req.query.address

    if(!address){
        return res.send({
          error: "Enter your city name !",
        });
    }

    forcastData(address, (error,{temprature,description,cityName,maxTemp,minTemp}) => {
        if(error){
            return res.send({
                error
            })
        }
        console.log(temprature,description,cityName)
        res.send({
            temprature,
            description,
            cityName,
            maxTemp,
            minTemp
        })
    })
})

app.get('*',(req,res)=>{
    res.send('PAGE NOT FOUND')
})

app.listen(port,()=>{
    console.log('Server Running, Please wait')
})
