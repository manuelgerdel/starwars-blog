import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PlanetDetails = () => {
    const { store } = useContext(Context);
    const params = useParams();
    const pointerIcon = store.pointerIcon;
    const planet = store.planets.find((item) => item._id === params.uid)
    return (
        <>
            <div className="container d-flex justify-content-around border-bottom border-primary">

                <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="planet-description-image mb-4 mt-2 border border-danger-subtle"></img>

                <div className="">
                    <h2 className="text-center text-white">  <i class="fa-solid fa-earth-asia fa-spin fa-spin-reverse swords rounded-5 rounded-top-2 text-warning"></i> {planet.properties.name} <i class="fa-solid fa-earth-asia fa-spin fa-spin-reverse swords text-warning"></i> </h2>
                    <p className="text-center text-light"> {planet.description} </p>

                </div>
            </div>

            <div class="container text-center mt-4">

                <div className="row align-items-start">

                    <div class="col-2">

                        <img src={pointerIcon} className="swords rounded-5 rounded-top-2"></img>

                    </div>
                    <div className="col-2">
                        <img src={pointerIcon} className="swords rounded-5 rounded-top-2"></img>
                    </div>
                    <div className="col-2">
                        <img src={pointerIcon} className="swords rounded-5 rounded-top-2"></img>
                    </div>
                    <div class="col-2">
                        <img src={pointerIcon} className="swords rounded-5 rounded-top-2"></img>
                    </div>
                    <div className="col-2">
                        <img src={pointerIcon} className="swords rounded-5 rounded-top-2"></img>
                    </div>
                    <div className="col-2">
                        <img src={pointerIcon} className="swords rounded-5 rounded-top-2"></img>
                    </div>
                </div>

                <div className="row align-items-start">

                    <div class="col-2">

                        <b className="text-warning-emphasis">Name</b>
                        <p className="text-white">{planet.properties.name}</p>

                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Population</b>
                        <p className="text-white">{planet.properties.population}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Climate</b>
                        <p className="text-white">{planet.properties.climate}</p>
                    </div>
                    <div class="col-2">
                        <b className="text-warning-emphasis">Terrain</b>
                        <p className="text-white">{planet.properties.terrain}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Diameter</b>
                        <p className="text-white">{planet.properties.diameter}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Rotation period</b>
                        <p className="text-white">{planet.properties.rotation_period}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanetDetails;