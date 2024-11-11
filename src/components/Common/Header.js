import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
import URLhdl from "../Common/Handler";
export default function Header() {
    const handler = URLhdl();
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link
                        to={handler["home"]["link"]}
                        className="navbar-brand"
                        href="#"
                    >
                        <span className="navbar-text">Comments</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addModal"
                                >
                                    Add Comment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={handler["list"]["link"]}
                                >
                                    Reload
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                className="modal fade"
                id="addModal"
                tabIndex="-1"
                aria-labelledby="addModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        {handler["create"]["route"]}
                    </div>
                </div>
            </div>
        </div>
    );
}
