import React from 'react'
import './Card.style.css'

export const Card = props=> (
    <div className='card-container'>
    <img alt='monster' src={`https://robohash.org/${props.onemonster.id}set=set2&size=20X20`}/>
    <h2>{props.onemonster.name}</h2>
    <p>{props.onemonster.email} https://tryphonegeeks.com/estimate/</p>
    <button >{props.onemonster.address.city}</button>
    <link rel='icon' herf="636-333.3324" hello/>
    </div>
)
