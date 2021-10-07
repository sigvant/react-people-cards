import React from 'react'
import '../App.css';

function Person({img, name, job}) {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <div className='person'>
            <div className='container'>
                <img src={url} alt="" />    
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ratione corporis rerum voluptates sit!
            <div>
                <h4>{name}</h4>
                <h4>{job}</h4>
            </div>
        </div>
    )
}

export default Person
