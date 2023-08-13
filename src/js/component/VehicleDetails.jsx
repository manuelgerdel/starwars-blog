import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const vehicleImage = "https://i.pinimg.com/1200x/24/56/4a/24564a6678ea60c3f0213113249124bb.jpg"

const VehicleDetails = () => {
    const { store } = useContext(Context);
    const pointerIcon = store.pointerIcon;
    const params = useParams();
    const vehicle = store.vehicles.find((item) => item._id === params.uid)
    return (
        <>
            <div className="container d-flex justify-content-around border-bottom border-primary">

                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="vehicle-description-image mb-4 mt-2 border border-white"></img>

                <div className="">
                    <h2 className="text-center text-white">  <img src={vehicleImage} className="swords rounded-5 rounded-top-0"></img> {vehicle.properties.name} <img src={vehicleImage} className="swords rounded-5 rounded-top-0"></img> </h2>
                    <p className="text-center text-light"> {vehicle.description} </p>

                </div>
            </div>



            <div class="container text-center mt-4">

                <div className="row align-items-start">

                    <div className="col-12 col-md-2">

                        <img src={pointerIcon} className="swords swords rounded-5 rounded-top-2"></img>

                    </div>
                    <div className="col-2">
                        <img src={pointerIcon} className="swords swords rounded-5 rounded-top-2"></img>
                    </div>
                    <div className="col-2">
                        <img src={pointerIcon} className="swords swords rounded-5 rounded-top-2"></img>
                    </div>
                    <div class="col-2">
                        <img src={pointerIcon} className="swords swords rounded-5 rounded-top-2"></img>
                    </div>
                    <div className="col-2">
                        <img src={pointerIcon} className="swords swords rounded-5 rounded-top-2"></img>
                    </div>
                    <div className="col-2">
                        <img src={pointerIcon} className="swords swords rounded-5 rounded-top-2"></img>
                    </div>
                </div>


                <div className="row align-items-start">

                    <div className="col-2">

                        <b className="text-warning-emphasis">Name</b>
                        <p className="text-white">{vehicle.properties.name}</p>

                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Model</b>
                        <p className="text-white">{vehicle.properties.model}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Vehicle class</b>
                        <p className="text-white">{vehicle.properties.vehicle_class}</p>
                    </div>
                    <div class="col-2">
                        <b className="text-warning-emphasis">Length</b>
                        <p className="text-white">{vehicle.properties.length}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Atmosphering speed</b>
                        <p className="text-white">{vehicle.properties.max_atmosphering_speed}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Consumables</b>
                        <p className="text-white">{vehicle.properties.consumables}</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default VehicleDetails;