const express = require('express')
const app = express()
const fs = require('fs')

const port = 8080
const name = process.env.NAME || 'default user'
const secret = process.env.HELLO_SECRET || '<no-secret-setup>'
const volumeMountedPath = process.env.VOLUME_MOUNTED_PATH || '.'


app.get('/', (_, res) => {
    res.send('Hello World! This message was sent by : ' + name + '\nSecret is : ' + secret)
})

// List files in a directory
app.get('/volume', (_, res) => {
    let fileList = ""
    fs.readdir(volumeMountedPath, (err, files) => {
        files.forEach(file => {
            fileList += file 
            fileList += "\n"
        });
        res.send(fileList)
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
