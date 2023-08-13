import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CharacterCard from "../component/CharacterCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import "../../styles/home.css";



export const Home = () => {
	const { store } = useContext(Context)


	return (
		<>
			<CharacterCard title="Characters" />

			<VehicleCard title="Vehicles" />

			<PlanetCard title="Planets" />


		</>
	)
}

