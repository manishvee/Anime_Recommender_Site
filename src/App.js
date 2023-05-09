import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import TopAiring from './components/TopAiring';
import AnimeTrailer from './components/AnimeTrailer.js';
import Searched from './components/Searched';
import HeadingText from './components/HeadingText.js';
import React from 'react'

function App() {
  const [topAnime, SetTopAnime] = useState([]);
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState('');
  const [searchStatus, SetSearchStatus] = useState(true);

  const GetTopAnime = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime').then(
      (res) => res.json()
    );
    SetTopAnime(response.data);
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    SetSearchStatus(false);
    FetchAnime(search);
  };
  
  const FetchAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&limit=10`
    ).then((res) => res.json());
    SetAnimeList(response.data);
  };


  useEffect(() => {
    GetTopAnime();
    return () => {
      GetTopAnime();
    };
  }, []);

  return (
    <div>
      <AnimeTrailer topAnime={topAnime} />
      <Header
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        animeList={animeList}
        SetSearchStatus={SetSearchStatus}
      />
      {searchStatus ? (
        <div>
          <HeadingText text="Top Anime" />
          <TopAiring topAnime={topAnime} />
        </div>
      ) : (
        <div>
          <Searched search={search} animeList={animeList} />
        </div>
      )}
    </div>
  );
}

export default App;
