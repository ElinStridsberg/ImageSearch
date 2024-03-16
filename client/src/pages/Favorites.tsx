import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth0(); 

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/favorites/${user?.nickname}`);
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <>
      <h1 className="FavoriteHeader">Favorites</h1>
      <div className="Favorites">
        {favorites.map((favorite: { url: string | undefined; }, index: React.Key | null | undefined) => (
          <img key={index} src={favorite.url} alt={`Favorite ${index}`} />
        ))}
      </div>
    </>
  );
};
