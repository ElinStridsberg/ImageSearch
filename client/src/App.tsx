import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useState } from "react";
import heartImage from "../src/images/favorite.png";
import searchImg from "../src/images/search.png";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchInformation, setSearchInformation] = useState<SearchInformation | null>(null);
  const [spelling, setSpelling] = useState(null);
  

  const handleClick = async () => {
    const value = (document.getElementById("searchInput") as HTMLInputElement).value;
    setInputValue(value);

    if (value) {
      try {
        const response = await fetch (`https://www.googleapis.com/customsearch/v1?key=AIzaSyCdN9XEZF0VFQhWMZUJvM--bxSH5M1hV5Q&cx=503e0f75223f949dc&num=10&searchType=image&q=${value}`);
        const data = await response.json();
        console.log(data)
     
        if (data.spelling && data.spelling.correctedQuery) {
          setSpelling(data.spelling.correctedQuery);
        } else {
          setSpelling(null);
        }
        
        setSearchResults(data.items);
        setSearchInformation(data.searchInformation);
        setInputValue("");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleSpellingLinkClick = () => {
    
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <>
          <div className="LogOut">
            <p className="WelcomeTxt">Welcome {user?.name} </p>   
            <LogoutButton />
          </div> 

          <div className="Search">
            <input type="text" placeholder="Type here.." id="searchInput"/>
            <img
                src={searchImg}
                alt="Search"
                className="searchBtn"
                onClick={handleClick}
/>
          </div>

          {searchResults.length > 0 && (
            <div className="SearchResults">
              {spelling && (
                <h4>
                  Did you mean:{" "}
                  <a href="#" onClick={handleSpellingLinkClick} className="didYouMean">
                    {spelling}
                  </a>{" "}
                  ?
                </h4>
              )}               
              <h5>Your search took {searchInformation?.searchTime} seconds.</h5>
          
         
              <ul>
                {searchResults.map((item, index) => (
                  <li key={index}>
                    <img src={item.link} alt={item.title} className="searchImgResults"/>
                    <button className="add" >Add <img src={heartImage} className="heart"/></button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
  
            <LoginButton />
      
        </>
      )}
    </div>
  );
}

export default App;