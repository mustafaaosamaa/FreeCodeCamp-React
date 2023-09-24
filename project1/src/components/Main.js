import React from "react"

export default function Main(props){
    return (
        <main className={props.darkMode ? "dark-main" : "light-main" } >
            <h1 id="h1-main">Fun facts About React</h1>
            <ul>
                <li>Was First released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}