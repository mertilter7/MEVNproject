const mongoose = require('mongoose')

const answerSchema = mongoose.Schema({
    answer : {
        type: Array,
        required: true, 
    }
})

const Answer = mongoose.model('answer' , answerSchema)

module.exports = Answer //burada create nerede çalışıyor? burda tanımlamaya gerek yok ki mongoose un methodu degıl mı zaten o ? find de aynı sekılde o calısıyor mesela