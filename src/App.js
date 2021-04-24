import { useState, useEffect } from "react";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";

function App() {
  const [animes, setAnimes] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Head />
      <div className="main_cont">
        <Sidebar topAnime={topAnime} />
        <Maincontent />
      </div>
    </div>
  );
}

export default App;
