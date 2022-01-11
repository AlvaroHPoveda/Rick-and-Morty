import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ResidentsList from './ResidentsList';
import SearchBox from './SearchBox';
import "../App.css"

const LocationInfo = () => {

    const [location, setlocation]= useState()

    const locationRandom = Math.floor(Math.random() * 126) + 1;
        
    useEffect(() => {
     
        axios.get(`https://rickandmortyapi.com/api/location/${locationRandom}`)
        .then((res) => setlocation(res.data));
                    
    }, [])    
    
       
    return (
        <div className='Containergenreal'>
            <div className='gif'></div>
            <h1 style={{color:"white"}}>Rick and Morty</h1>
            <SearchBox setlocation={setlocation}/>
                <h3 style={{color:"white"}}>{location?.name}</h3>
            <div style={{color:"white"}} className='Cardzero'>
                <h4>type: <span style={{color:"#CFCDCD"}}>{location?.type}</span></h4>
                <h4>dimension: <span style={{color:"#CFCDCD"}}>{location?.dimension}</span></h4>
                <h4>population: <span style={{color:"#CFCDCD"}}>{location?.residents.length}</span></h4>
            </div>
                <h2>Residents</h2>
                <ResidentsList location={location}/>
        </div>
    );
};

export default LocationInfo;