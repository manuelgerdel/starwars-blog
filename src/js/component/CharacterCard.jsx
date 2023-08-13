import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const CharacterCard = ({ title }) => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <h2 className="my-3 text-danger">{title}</h2>
            </div>

            <div className="container d-flex overflow-x-scroll gap-3 mb-5">

                {

                    store.people.map((character) => (

                        <div className="card col-12 col-md-4" key={character._id} >
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top img-fluid object-fit-contain" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ps-2">{character.properties.name}</h5>
                                <p className="card-text ps-2"><b>Gender:</b> {character.properties.gender}</p>
                                <p className="card-text ps-2"><b>Hair color:</b> {character.properties.hair_color}</p>
                                <p className="card-text ps-2"><b>Eye color:</b> {character.properties.eye_color}</p>
                                <div className="d-flex justify-content-between">
                                    <a href="#" className="btn btn-outline-primary" onClick={() => navigate(`/character-description/${character._id}`)}>Learn more</a>
                                    <button type="button" className={`${store.favorites.includes(character) ? "btn btn-outline-warning active" : "btn btn-outline-warning"} `} onClick={() => actions.addFavorites(character)} data-bs-toggle="button"><i className="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                        </div>

                    ))

                }


            </div >

        </>


    )

}



export default CharacterCard;