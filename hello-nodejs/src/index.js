const express = require('express')
const app = express()
const fs = require('fs')

const port = 8080
const name = process.env.NAME || 'default user'
const volumeMountedPath = process.env.VOLUME_MOUNTED_PATH || '.'

var fileList = ""

fs.readdir(volumeMountedPath, (err, files) => {
    files.forEach(file => {
        fileList += file 
        fileList += "\n"
    });
});

app.get('/', (req, res) => {
    res.send('Hello World! This message was sent by : '+ name)
})

app.get('/volume', (req, res) => {
    res.send(fileList)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
