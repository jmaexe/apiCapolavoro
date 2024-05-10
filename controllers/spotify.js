require('dotenv').config()
const request = require('request')
const url = require('url')

const getFavouriteSongs = async (req,res) => {
    const params = req.query;
    const {quantity,token} = params;
    const response = await fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=" + quantity, {
        headers: { Authorization: `Bearer ${token}`}
    }) 
    console.log(response)
    if(response.status === 200) {
      const json = await response.json();
      console.log(json)
      res.json(json.items);
    } else {
      res.status(500).send(response.status)
    }

}



const getAuth = (req,res) => {
    res.redirect(`https:accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&client_secret${process.env.CLIENT_SECRET}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=${process.env.SCOPE}`)
}

const callback = (req,res) => {
   var code = req.query.code;
   var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: 'authorization_code'
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
    },
    json: true
  };

  request.post(authOptions,(error,response,body) => {
    const refresh_token = body.refresh_token;
    const access_token = body.access_token;
    if(refresh_token && access_token) {
      res.redirect(url.format({pathname:'http://localhost:5173/spotify',query: body}))
    } 
    //http://localhost:5173/
  })
}



module.exports = {
    getFavouriteSongs,
    getAuth,
    callback
}