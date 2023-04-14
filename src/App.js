import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import TopAiring from './components/TopAiring';
import AnimeTrailer from './components/AnimeTrailer.js';
import Searched from './components/Searched';
import db from './components/firebase';
import HeadingText from './components/HeadingText.js';
import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import styles from './index.css'

function App() {
  const [userData, setUserData] = useState([]);
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

  const getUsers = async () => {
    const collectionRef = collection(db, 'Users');
    const querySnapshot = await getDocs(collectionRef);
    setUserData(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
  };

  useEffect(() => {
    getUsers();
    GetTopAnime();
    return () => {
      getUsers();
      GetTopAnime();
    };
  }, []);

  return (
    <div>
      {/* <h2>{userData.length !== 0 && userData[0].name}</h2> */}
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
