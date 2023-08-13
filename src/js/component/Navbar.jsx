import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { store, actions } = useContext(Context)
    const navbarBackground = "https://usagif.com/wp-content/uploads/2021/06/71.gif"
    const deleteIcon = "https://usagif.com/wp-content/uploads/2021/06/2.gif"

    return (

        <>
            <nav className="navbar bg-body-tertiary navbar-image object-fit ">
                <div className="container">

                    <Link to="/" className="navbar-brand">
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="Star Wars logo" className="logo" />
                    </Link>

                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites <span className="bg-warning-subtle border border-white rounded-0 rounded-top-5">{store.favorites.length}</span> <i className="fa-solid fa-crown"></i>
                        </button>

                        <ul className="dropdown-menu">

                            {
                                store.favorites.map((favorite) => {
                                    return (
                                        <li className="list-group-item text-center"> {favorite === 0 ? "empty" : favorite.properties.name} <button type="button" className="btn" onClick={() => actions.deleteFavorite(favorite)} > <img src={deleteIcon} className="deleteIcon rounded-start-pill"></img></button> </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;