import React from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (<Cards key={item.id} item={item} />)
    })
    return (
        <div>
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}