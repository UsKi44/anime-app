import React from "react";

function Sidebar({ topAnime }) {
  return (
    <div className="sidebar">
      <h2 style={{ color: "white" }}>Top Anime</h2>
      {topAnime.map((anime) => (
        <div key={anime.mal_id}>
          <h3>{anime.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
