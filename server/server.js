const express = require("express")
const SpotifyWebApi = require("spotify-web-api-node")
const app = express()

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "6c11a5ed20034ac2843bdd9704dff87f",
        clientSecret: "a95326546a2d46908f366865d818028f"
    })  

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})