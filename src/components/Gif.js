import React from "react"
import './Gif.css'

export default function Gif ({ title, id, url }) {
    return (
        <a href={`#${id}`} className="Gif">
            <h6>{ title }</h6>
            {/* <small>id: { id }</small> */}
            <img src={ url } alt={ title } />
        </a>
    )
}