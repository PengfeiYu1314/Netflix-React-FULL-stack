import express from 'express'


const app = express()




app.use('/', (req, res) => {
    res.json('hello world')
})







const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})