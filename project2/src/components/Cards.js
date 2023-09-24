import React from "react"
import Location from "../location.avif"

export default function Cards(props) {
    return (
        <div className="container">
            <img src={props.item.image} className="landmarks"/>
            <div>
                <div className="loc-map">
                    <img src={Location} className="Location" />
                    <h3>{props.item.location}</h3>
                    <a href={props.item.mapsUrl}> View on Google Maps </a>
                </div>
                <h1>{props.item.title}</h1>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <h4>{props.item.description}</h4>
            </div>
        </div>
    )
}