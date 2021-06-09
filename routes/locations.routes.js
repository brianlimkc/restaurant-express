const router = require('express').Router()
const CuisineModel = require("../models/cuisine.model")
const DistrictModel = require("../models/district.model")
const RestaurantModel = require("../models/restaurant.model")

router.get("/", async(req,res)=>{
    try{
        let districts = await DistrictModel.find()
        res.render("locations",{districts})
    }catch (e) {

    }
})

router.get("/:id", async(req,res)=>{
    try{
        let restaurants = await RestaurantModel.find()
        let district = await DistrictModel.findById(req.params.id)
        console.log(district)
        let filteredRestaurants = restaurants.filter(restaurant=>restaurant.districts[0]._id === req.params.id)
        console.log(filteredRestaurants)
        res.render("location",{district, filteredRestaurants})
    }catch (e) {

    }
})


module.exports = router
