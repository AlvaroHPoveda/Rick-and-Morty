import React from 'react';
import ResidentInfo from './ResidentInfo';
import "../App.css"

const ResidentsList = ({location}) => {

    
    return (
        <div className='list'>

            {location?.residents.map((resident) => (<ResidentInfo url ={resident} key={resident}/>))}
          
        </div>
    );
};

export default ResidentsList;