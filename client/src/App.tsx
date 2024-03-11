import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import searchImg from "../src/images/search.png";
import { useEffect, useState } from "react";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchInformation, setSearchInformation] = useState<SearchInformation | null>(null);
  const [spelling, setSpelling] = useState<Spelling[] | null>(null);


  const handleClick = async () => {
    const value = (document.getElementById("searchInput") as HTMLInputElement).value;
    setInputValue(value);

    if (value) {
      try {
        const response = await fetch (`https://www.googleapis.com/customsearch/v1?key=AIzaSyCdN9XEZF0VFQhWMZUJvM--bxSH5M1hV5Q&cx=503e0f75223f949dc&num=10&searchType=image&q=${value}`);
        const data = await response.json();
        console.log(data)
        setSearchResults(data.items); // Antag att resultatet är en array i data-objektet med namnet "items"
        setSearchInformation(data.searchInformation);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  
  return (
    <div>
      <div className="headline">
        <h1>SEARCH</h1>   
        <img 
          src={searchImg} 
          alt="search" 
          className="searchImg"
        />
      </div>

      {isAuthenticated ? (
        <>
          <div className="LogOut">
            <p className="WelcomeTxt">Welcome {user?.name} </p>
            <LogoutButton />
          </div> 
          <div className="Search">
            <input type="text" placeholder="Type here.." id="searchInput"/>
            <button className="searchBtn" onClick={handleClick}>Search</button>
          </div>
          <div className="SearchResults">
        
    	  {spelling && spelling.length > 0 && (
  <h4>Menade du: {spelling[0].correctedQuery}</h4>
)}

        



               <h5>Din sökning tog {searchInformation?.searchTime} sekunder</h5>
               <h1>Search Results</h1>
               <h4>{}</h4>
         
            <ul>
              {searchResults.map((item, index) => (
                <li key={index}>
                  <img src={item.link} alt={item.title} className="searchImgResults"/>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="Login">
            <p className="loginTxt">Please log in..</p>
            <LoginButton />
          </div>
        </>
      )}
    </div>
  );
}

export default App;