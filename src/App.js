import { useEffect, useState } from 'react';
import './styles/App.css';
import TopAiring from './components/TopAiring';
function App() {
  const [topAnime, SetTopAnime] = useState([]);

  const GetTopAnime = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime').then((res) => res.json());
    SetTopAnime(response.data)
  }

  useEffect(()=>{
    GetTopAnime();
  },[])
  return (
    <div className="App">
      <TopAiring topAnime = {topAnime}/>
    </div>
  );
}

export default App;
