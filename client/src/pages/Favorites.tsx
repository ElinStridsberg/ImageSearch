import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton';

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
    <> <div className="Favorites">
      <h1 className="FavoriteHeader">{user?.name}s favorites</h1>
     
    <ul>
        {favorites.map((favorite: { url: string | undefined; }, index: React.Key | null | undefined) => (
         <li key={index}>
         <img key={index} src={favorite.url} alt={`Favorite ${index}`} className='favoriteImg'/>
         </li>
   
        ))} 
        </ul>
        <LogoutButton />
      </div>
    </>
  );
};
