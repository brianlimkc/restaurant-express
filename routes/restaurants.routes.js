const router = require('express').Router()
const CuisineModel = require("../models/cuisine.model")
const DistrictModel = require("../models/district.model")
const RestaurantModel = require("../models/restaurant.model")

// get for home page

router.get("/", async (req,res)=>{
    try{
        let cuisines = await CuisineModel.find()
        let districts = await DistrictModel.find()
        let restaurants = await RestaurantModel.find()
        res.render("index",{cuisines, districts,restaurants})
    }catch (e) {

    }
})

// get for new restaurant

router.get("/add", async (req,res)=>{
    try{
        let cuisines = await CuisineModel.find()
        let districts = await DistrictModel.find()
        res.render("add",{cuisines, districts})
    }catch (e) {

    }
})

// post for new restaurant

router.post("/add", async(req, res) => {
    try{
        let restaurant = new RestaurantModel(req.body)
        await restaurant.save()
        res.redirect("/")
    }catch(e){
        console.log(e)
        res.redirect("/")
    }
})

// get for show restaurant

router.get("/show/:id", async(req,res)=>{
    try{

        let restaurant = await RestaurantModel.findById(req.params.id)
            .populate("cuisines", "-_id cuisine")
            .populate("districts", "-_id district")
        res.render("show",{restaurant})
        console.log(restaurant)
    }catch (e) {

    }
})

// get for edit restaurant

router.get("/edit/:id", async(req,res)=>{
    try{
        let cuisines = await CuisineModel.find()
        let districts = await DistrictModel.find()
        let restaurant = await RestaurantModel.findById(req.params.id)
            .populate("cuisines", "-_id cuisine")
            .populate("districts", "-_id district")
        res.render("edit",{cuisines, districts, restaurant})
        console.log(restaurant)
    }catch (e) {

    }
})

// post for edit restaurant

router.post("/edit/:id", async(req, res) => {
    try{
         await RestaurantModel.findByIdAndUpdate(req.params.id, {$push:{districts: req.body.districts, cuisines: req.body.cuisines}})
        res.redirect("/")
    }catch(e){
        console.log(e)
        res.redirect("/")
    }
})

router.delete("/delete/:id", async(req,res)=>{
    try{
        await RestaurantModel.findByIdAndDelete(req.params.id)
        res.redirect("/")
    }catch (e) {

    }
})


module.exports = router
