const mongoose = require('mongoose')
const chalk = require('chalk')
const dbConfig = require('./config')

console.log(dbConfig)

let {url, db, authInfo} = dbConfig.person
let connection = `${url}/${db}`

mongoose.connect(connection, authInfo)
.then(()=> console.log(chalk.blueBright(`Connected to ${connection}`)))
.catch(err => console.log(chalk.red(`Issues connecting to ${connection}: ${err}`)))

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

var UserModel = mongoose.model('user', userSchema)

// var User = new UserModel({
//     name: 'Jerry',
//     age: 45,
//     email: 'jerrySeinfeld@gmail.com'
// })

var User = new UserModel({
    name: 'George',
    age: 43,
    email: 'puddingskins@gmail.com'
})

// User.save((err, user) => {
//     if(err){
//         console.log(chalk.bgRedBright('There was an error saving data.'))
//     } else {
//         console.log(chalk.bgGreenBright('Data was saved.'))
//         console.log(user)
//     }
// })
UserModel.create({
    name: 'Elaine',
    age: 39,
    email: 'Elaine@gmail.com'
},
    function(error, user){
        if(error){
            console.log(chalk.bgRedBright('There was an error saving data.'))
        } else {
            console.log(chalk.bgGreenBright('Data was saved.'))
            console.log(user)
    }
)


// db.collection.insert({})