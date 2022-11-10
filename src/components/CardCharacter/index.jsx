import React from "react"
import { ContainerCard } from "./styles"

function CardCharacter({ image, name, status, specie }) {
	return (
		<ContainerCard>
			<figure className="container-card__image">
				<img src={image} alt="Imagem" />
			</figure>

			<div className="container-card__info">
				<h3>{name}</h3>

				<ul>
					<li>Status: {status}</li>
					<li>Species: {specie}</li>
				</ul>
			</div>
		</ContainerCard>
	)
}

export default CardCharacter
