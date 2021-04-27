import { useState, useEffect } from "react";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";

function App() {
  const [animes, setAnimes] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 5));
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    console.log(temp.results);

    setAnimes(temp.results);
  };

  const searchAnime = (e) => {
    e.preventDefault();

    FetchAnime(search);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="App">
      <Head />
      <div className="main_cont">
        <Sidebar topAnime={topAnime} />
        <Maincontent
          searchAnime={searchAnime}
          setSearch={setSearch}
          search={search}
          animes={animes}
        />
      </div>
    </div>
  );
}

export default App;
