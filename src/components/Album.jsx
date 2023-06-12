import { useState } from "react"
import Tombol from "./Tombol";
import './Albums.css'

export default function Album (props) {
  const [showMore, setShowMOre] = useState(false);
  const [likeMore, setLikeMOre] = useState(false);
  const [color, setColor] = useState(false);
  

 const handleMoreClick = () =>{
  setShowMOre(!showMore)
 }

 const handleLikeClick = () =>{
  setLikeMOre(!likeMore)
  setColor(!color)
 }

  return (
    <div className="Card">
      <img className="gambar" src={props.gambar} />
      <div>
        <p>{props.namaAlbums}</p>
        {showMore && <h2>{props.deskripsi}</h2>}
      </div>
        <div className="Button">
          <Tombol
            handleClick={() => handleMoreClick()}
            teks={showMore ? "Deskripsi" : "Deskripsi"}
          />
          <Tombol
            handleClick={() => handleLikeClick()}
            teks={likeMore ? "batal suka" : " suka"}
            color={color ? "red" : "white"}
          />
        </div>
    </div>
  );
}


