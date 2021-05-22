const express = require('express')
const Answer = require('../db/Answers.js')
const User = require('../db/User.js')
const router = express.Router()


//Answers show route
router.get('/showanswers', async (req,res) =>{
    try {
        const allAnswers = await Answer.find() 
        res.status(200).json(allAnswers)
    } catch (error) {
        console.log(error)
    }
})  

//Answers post route
router.post('/answers', async (req,res) =>{ //burada
    try {
    const answer = req.body
    const sendingAnswer = await Answer.create(answer)
    res.status(201).json(sendingAnswer)
    //res.status(200).json(answer) burada postu nerede yapıyorsun?
    } catch (error) {
        console.log(error)
    }
})

// Show all users in database
router.get('/users', async (req,res) =>{
    const allUsers = await User.find({}); // kullanıcı nesnesi oluştur mongo içinde ki bütün kullanıcıları göster
    res.json(allUsers) // json olarak dön
})

//Create user route
router.post('/users', async (req,res) =>{
    try {
        const user = req.body // bodyden gelen yeni kullanıcıyı oluştur
        const createdUser = await User.create(user) // bunu bir objeye ata mongoya ekle
        res.status(201).json(createdUser) // oluşturulan postu json olarak dön http 201
    } catch (error) {
        console.log(error)
    }
})


module.exports =  router;