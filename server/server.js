const express = require('express');
require("dotenv").config();
const cors = require('cors');
const fs = require('fs').promises;
const imageSchema = require("./schemas/image.schema")

const app = express();
const port = process.env.PORT || 3000


app.use(express.json());
app.use(cors());

app.post('/api/addfavorites', async (req, res) => {
    const { error, value } = imageSchema.validate(req.body)
    console.log(value)
      console.log(error, value)
      if (error) {
      return res.status(400).json(error)
      }
      
    const { image,  user } = req.body;
    try {
        const fileName = "favorites.json";
        let favorites;
        try {
          const data = await fs.readFile(fileName, "utf-8");
          favorites = JSON.parse(data);
        } catch (error) {
          favorites = {};
        }
        if (!favorites[req.body.user]) {
            favorites[req.body.user] = { favoriteImages: [] };
          }
          favorites[req.body.user].favoriteImages.push({
            url: req.body.image,
          });
       
          await fs.writeFile(fileName, JSON.stringify(favorites, null, 2));

            res.status (200).json (favorites);
            } catch (error) {
                console.error("Error adding favorites:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });

        app.get('/api/favorites/:user', async (req, res) => {
            const user = req.params.user;
            try {
              const fileName = "favorites.json";
              const data = await fs.readFile(fileName, "utf-8");
              const favorites = JSON.parse(data);
          
              const userFavorites = favorites[user] || { favoriteImages: [] };
          
              res.status(200).json(userFavorites.favoriteImages);
            } catch (error) {
              console.error("Error fetching favorites:", error);
              res.status(500).json({ error: "Internal Server Error" });
            }
          });
          
app.listen(3000, () => console.log("Server up and running"));
