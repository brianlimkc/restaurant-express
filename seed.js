const District = require("./models/district.model")
const Cuisine = require("./models/cuisine.model")
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongodb running")
    }).catch(err => {
        console.log(err)
    })

District.deleteMany()
    .then(() =>{
        District.insertMany([
            "Raffles Place, Cecil, Marina, People's Park",
            "Anson, Tanjong Pagar",
            "Queenstown, Tiong Bahru",
            "Telok Blangah, Harbourfront",
            "Pasir Panjang, Hong Leong Garden, Clementi New Town",
            "High Street, Beach Road",
            "Middle Road, Golden Mile",
            "Little India",
            "Orchard, Cairnhill, River Valley",
            "Ardmore, Bukit Timah, Holland Road, Tanglin",
            "Watten Estate, Novena, Thomson",
            "Balestier, Toa Payoh, Serangoon",
            "Macpherson, Braddell",
            "Geylang, Eunos",
            "Katong, Joo Chiat, Amber Road",
            "Bedok, Upper East Coast, Eastwood, Kew Drive",
            "Loyang, Changi",
            "Tampines, Pasir Ris",
            "Serangoon Garden, Hougang, Punggol",
            "Bishan, Ang Mo Kio",
            "Upper Bukit Timah, Clementi Park, Ulu Pandan",
            "Jurong",
            "Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang",
            "Lim Chu Kang, Tengah",
            "Kranji, Woodgrove",
            "Upper Thomson, Springleaf",
            "Yishun, Sembawang",
            "Seletar",
        ])
            .then(suc => {
                console.log("done")
                process.exit()
            }).catch(er => {
            process.exit()
        })
    })


Cuisine.deleteMany()
    .then(() =>{
        Cuisine.insertMany([
            "All-Day Breakfast",
            "Australian",
            "American",
            "British",
            "Buffet",
            "Cafe",
            "Cajun",
            "Caribbean",
            "Chinese",
            "Dim Sum",
            "French",
            "Fusion",
            "German",
            "Greek",
            "Halal Certified",
            "Indian",
            "Indonesian",
            "International",
            "Italian",
            "Japanese",
            "Korean",
            "Local",
            "Malaysian",
            "Mexican",
            "Middle Eastern",
            "Modern European",
            "Peranakan",
            "Portuguese",
            "Seafood",
            "South American",
            "Southeast Asian",
            "Spanish",
            "Steakhouse",
            "Swedish",
            "Thai",
            "Vegetarian Friendly",
            "Vietnamese",
        ])
            .then(suc => {
                console.log("done")
                process.exit()
            }).catch(er => {
            process.exit()
        })
    })
