import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const VehicleCard = ({ title }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <h2 className="my-3 text-danger">{title}</h2>
            </div>

            <div className="container d-flex overflow-x-scroll gap-3 mb-5">
                {

                    <div className="container d-flex overflow-x-scroll gap-3 ">
                        {
                            store.vehicles.map((vehicle) => (
                                <div className="card col-12 col-md-4" key={vehicle._id}>
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title ps-2">{vehicle.properties.name}</h5>
                                        <p className="card-text ps-2"><b>Model:</b> {vehicle.properties.model}</p>
                                        <p className="card-text ps-2"><b>Class:</b> {vehicle.properties.vehicle_class}</p>
                                        <div className="d-flex justify-content-between">
                                            <a className="btn btn-outline-primary" onClick={() => navigate(`/vehicle-description/${vehicle._id}`)}> Learn more</a>
                                            <button type="button" className={`${store.favorites.includes(vehicle) ? "btn btn-outline-warning active" : "btn btn-outline-warning"} `} onClick={() => actions.addFavorites(vehicle)} data-bs-toggle="button"><i className="fa-regular fa-heart"></i></button>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                }

            </div >

        </>

    )

}


export default VehicleCard;

