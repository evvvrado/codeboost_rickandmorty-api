import axios from "axios"
import React, { useEffect, useState } from "react"
import CardCharacter from "../CardCharacter"
import { ContainerApp, ContentCharacters, HeaderApp, Loader } from "./styles"

import IconLoader from "../../assets/loader.gif"

function Application() {
	const [page, setPage] = useState("https://rickandmortyapi.com/api/character/")
	const [info, setInfo] = useState([])
	const [isLoader, setIsLoader] = useState(true)
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		axios.get(page).then(({ data }) => {
			setCharacters((current) => [...current, ...data.results])
			setInfo(data.info)
			setIsLoader(false)
		})
	}, [page])

	const handleLoad = () => {
		setIsLoader(true)
		setPage(info.next)
	}

	return (
		<>
			{isLoader && (
				<Loader>
					<img src={IconLoader} alt="Carregando" />
				</Loader>
			)}
			<ContainerApp>
				<HeaderApp>
					<img
						src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
						alt="logo rick and morty"
						height="67px"
					/>
					<span>Character number: {info.count}</span>
				</HeaderApp>

				<ContentCharacters>
					<div>
						{characters &&
							characters.map(({ name, status, species, image }, index) => {
								return (
									<CardCharacter
										key={index}
										image={image}
										name={name}
										status={status}
										specie={species}
									/>
								)
							})}
					</div>
					<button onClick={handleLoad}>Load more</button>
				</ContentCharacters>
			</ContainerApp>
		</>
	)
}

export default Application
