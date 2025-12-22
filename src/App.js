import "./styles.css";
import { useState } from "react";

function GetItemInfo({image,desc})
{
  console.log(image);
  return (
    <>
      <div class="GallaryItemBox">
        <img src={image} onError={(e) => {
          e.target.src = 
          "https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png"; }} >
        </img>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default function App() {
  const [newImage, setNewImage] = useState("");
  const [newDesciption, setNewDesciption] = useState("");
  const [imageList, setImageList] = useState();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setImageList(
            imageList
              ? [...imageList, <GetItemInfo image={newImage} desc={newDesciption} />]
              : [<GetItemInfo image={newImage} desc={newDesciption} />]
          );
        }}
      >
        <input
          type="text"
          placeholder="Введите ссылку на картинку"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Введите описание картинки"
          value={newDesciption}
          onChange={(e) => setNewDesciption(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <h3>Gallary</h3>
      <div class="osnova">{imageList}</div>
      
    </>
  );
}
