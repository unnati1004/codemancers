import { useState } from 'react';
import "./style/Gifs.css";

export const Gif = ({handle}) => {
  const GIPHY_API = `https://api.giphy.com/v1/gifs/search?api_key=yCH88qDr3JCOEEWuESg34aXKYSbyUVQc&limit=25&offset=0&q=`;
  let [search, setSearch] = useState("");
  let [gifs, setGifs] = useState([]);
  let [loading, setLoading] = useState(false);
  const handlegif=(e)=>{
      console.log(e)
      handle(e)
  }
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
    <div className='gif'>
      <input
        type="text"
        placeholder="Serach Gifs"
        value={search}
        onChange={(e) => {setSearch(e.target.value)
            searchGif()
        }}
      />

      {gifs.map((g,i) => {
        return (
          <div className='f'key={i}>
            <img className='i' src={g} alt="" onClick={(e)=>handlegif(e.target.src)} />
          </div>
        );
      })}
    </div>
  );
};
