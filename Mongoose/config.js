const person = {
    url: 'mongodb://mongo.accsoftwarebootcamp.com',
    db: 'seinfeld_cs',
    authInfo: {
        user: 'accadmin',
        pass: 'acc_rocks_2020',
        auth: {
            authSource: 'admin'
        },
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

exports.person = person