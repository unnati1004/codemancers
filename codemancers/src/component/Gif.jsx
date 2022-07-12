import { useState } from 'react';
export const Gif = () => {
  const GIPHY_API = `https://api.giphy.com/v1/gifs/search?api_key=yCH88qDr3JCOEEWuESg34aXKYSbyUVQc&limit=25&offset=0&q=`;
  let [search, setSearch] = useState("");
  let [gifs, setGifs] = useState([]);
  let [loading, setLoading] = useState(false);

  const searchGif = () => {
    if (search.length > 0) {
      setLoading(true);
      fetch(GIPHY_API + search)
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then((result) => {
          setGifs(
            result.data.map((gif) => {
              return gif.images.fixed_height.url;
            })
          );
        })
        .catch(() => {
          setLoading(false);
          alert("something went wrong");
        });
    }
  };
  return (
    <div>
      <h1>hello</h1>

      <input
        type="text"
        placeholder="Serach Gifs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchGif}>Search</button>

      {gifs.map((gif) => {
        return (
          <div>
            <img src={gif} alt="" />
          </div>
        );
      })}
    </div>
  );
};
