import { useState } from 'react'
import './layout.css'

function ImageSearch() {
  const[images, setImages] = useState([]);
  const[userInput, setUserInput] = useState('');
  

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
    console.log(event.target.value);
  }

  async function getData() {
    const url = `https://api.unsplash.com/search/photos/?page=1&query=${userInput}`;
    const request = new Request(url, {
      headers: {
        'Authorization':'Client-ID 671OMumRwZQJNiPauRfpRHbYRLdhSD5Lyn7zGU-GdJc',
      }
    })
    const response = await fetch(request);
    const data = await response.json();
    setImages(data.results);
    console.log(images);
  }

  return (
    <>
      <div className='container'>
        <h1>Image Search</h1>
        <input
          className='userInput'
          type='text' 
          placeholder='Keywords'
          value={userInput}
          onChange={handleUserInput}
        />

        <button className='button' onClick={getData}>Search</button>

        <div className='imageDisplay'>
          {images.map((image, index) => (
              <img className='image' key={index} src={image.urls.small}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImageSearch;
