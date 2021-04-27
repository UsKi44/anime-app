import React from "react";

function Maincontent(props) {
  return (
    <div className="main_content_div">
      <form onSubmit={props.searchAnime}>
        <input
          type="search"
          placeholder="ანიმეს სახელი"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </form>
      <div className="results_div">
        {props.animes.map((anime) => (
          <div key={anime.mal_id}>
            <img src={anime.image_url} alt="#" />
            <h2> {anime.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Maincontent;
