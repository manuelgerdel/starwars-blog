import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const swordImage = "https://cdn-icons-png.flaticon.com/512/2010/2010217.png"



const CharacterDetails = () => {
    const { store } = useContext(Context);
    const pointerIcon = store.pointerIcon;
    const params = useParams();
    const character = store.people.find((item) => item._id === params.uid)
    // console.log(character)
    return (
        <>

            <div className="container d-flex justify-content-around border-bottom border-primary">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="character-description-image mb-4 mt-2 border border-white"></img>
                <div className="">
                    <h2 className="text-center text-white">  <img src={swordImage} className="swords"></img> {character.properties.name} <img src={swordImage} className="swords"></img></h2>
                    <p className="text-center text-light"> {character.description} </p>
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
                        <p className="text-white">{character.properties.name}</p>

                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Birth year</b>
                        <p className="text-white">{character.properties.birth_year}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Gender</b>
                        <p className="text-white">{character.properties.gender}</p>
                    </div>
                    <div class="col-2">
                        <b className="text-warning-emphasis">Height</b>
                        <p className="text-white">{character.properties.height}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Skin color</b>
                        <p className="text-white">{character.properties.skin_color}</p>
                    </div>
                    <div className="col-2">
                        <b className="text-warning-emphasis">Eye color</b>
                        <p className="text-white">{character.properties.eye_color}</p>
                    </div>
                </div>
            </div>
        </>


    )
}




export default CharacterDetails;