const express = require('express')
let routerOnePiece = require('./routes/onepiece')
const routerSpotify = require('./routes/spotify')
const app = express()
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 5000;


app.use('/api/anime/onepiece',routerOnePiece)
app.use('/spotify',routerSpotify)

app.listen(PORT, () => console.log(`app listening ${PORT} port`))
