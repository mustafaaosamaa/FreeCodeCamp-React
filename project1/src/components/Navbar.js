import React from "react"
import reactlogo from "../images/react-image.png"

export default function Navbar(props){
    return (
        <nav className={props.darkMode ? "dark-nav" : "light-nav" }>
            <img src={reactlogo} />
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
            <button onClick={props.toggleDarkMode}>{props.darkMode ? "Light Mode" : "Dark Mode" }</button>
        </nav>
    )
}