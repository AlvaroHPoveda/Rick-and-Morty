import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const ResidentInfo = ({url}) => {

    const [character, setcharacter] = useState({});
    
    useEffect(() => {
        axios.get(url)
        .then((res) => setcharacter(res.data));
    }, [url]);

    let background
    if(character?.status==="Dead"){
        background = "red"
    }else{
        background = "green"
    }
    
    return (
        <div className='ContainerCard'>
            <div className='Card'>
                <img className='image' src={character?.image}/>
                <div className='description'>   
                    <h3>{character?.name}</h3>
                    <h5><span className='circle'style={{ background :background }}></span>
                        {character?.status}</h5>
                    <h6 style={{color:"gray"}}>origin</h6>
                    <h5>{character?.origin?.name}</h5>
                    <h6 style={{color:"gray"}}>episodes where appear</h6>
                    <h5>{character?.episode?.length}</h5>
                </div> 
            </div>
        </div>
    );
};

export default ResidentInfo;