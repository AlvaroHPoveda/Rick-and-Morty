import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../App.css"

const SearchBox = ({setlocation}) => {

    const [id, setId] = useState("");

    const search = () => {

        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then((res) => setlocation(res.data));
    };
  
    return (
      <div className="search-box">
        <input className='input' type="text" placeholder="enter a number between 1 to 126" onChange={(e) => setId(e.target.value)} value={id} />
        <button onClick={search}>Search</button>
      </div>
    );
};

export default SearchBox;