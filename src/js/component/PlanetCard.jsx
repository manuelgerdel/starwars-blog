import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const PlanetCard = ({ title }) => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    return (
        <>

            <div className="container">
                <h2 className="my-3 text-danger">{title}</h2>
            </div>

            <div className="container d-flex overflow-x-scroll gap-3 ">

                {
                    store.planets.map((planet) => (

                        <div className="card col-12 col-md-4 object-fit-cover" key={planet._id}>
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ps-2">{planet.properties.name}</h5>
                                <p className="card-text ps-2"><b>Population:</b> {planet.properties.population}</p>
                                <p className="card-text ps-2"><b>Climate:</b> {`${planet.properties.rotation_period} days`}</p>
                                <p className="card-text ps-2"><b>Terrain:</b> {planet.properties.terrain}</p>
                                <div className="d-flex justify-content-between">
                                    <a className="btn btn-outline-primary" onClick={() => navigate(`/planet-description/${planet._id}`)}>Learn more</a>
                                    <button type="button" className={`${store.favorites.includes(planet) ? "btn btn-outline-warning active" : "btn btn-outline-warning"} `} onClick={() => actions.addFavorites(planet)} data-bs-toggle="button"><i className="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </>
    )
}


export default PlanetCard;