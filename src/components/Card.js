import React from "react"

export default function Card(props) {
	return (
		<div className="card">
			<img src={props.item.imageUrl} alt="japan" />
			<div>
				<span>{props.item.location}</span>
				<a className="card-googleurl" href={props.item.googleMapsUrl}>View on Google Maps</a>
			</div>
			<h1>{props.item.title}</h1>
			<h3>{props.item.startDate} - {props.item.endDate}</h3>
			<p>{props.item.description}</p>
		</div>
	)
}