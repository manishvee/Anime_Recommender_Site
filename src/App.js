import { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import TopAiring from './components/TopAiring';
import Searched from './components/Searched';
function App() {
  const [topAnime, SetTopAnime] = useState([]);
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");
  const [searchStatus,SetSearchStatus] = useState(true); 
  

  const GetTopAnime = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime').then((res) => res.json());
    SetTopAnime(response.data) 
  }
	const HandleSearch = e => {
		e.preventDefault();
    SetSearchStatus(false); 
		FetchAnime(search);
	}
	const FetchAnime = async (query) => {
		const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`)
			.then(res => res.json());
      console.log(query); 
		SetAnimeList(response.data);
	}

  
  


  useEffect(()=>{
    GetTopAnime();
  },[]) 


  return (
    <div className='App'>
      <Header
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        animeList={animeList}
        SetSearchStatus={SetSearchStatus}
      />
      {searchStatus ? (
        <TopAiring topAnime={topAnime} />
      ) : (
        <Searched search={search} animeList={animeList} />
      )}
    </div>
  );
}

export default App;
