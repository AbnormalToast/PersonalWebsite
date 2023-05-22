import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofiles } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return (
        <>
            <header className="fixed-top site__header">
                <div className="d-flex align-items-center justify-content-between">
                    <link className="navbar-brand nav_ac" to="/">
                        {logotext}
                    </link>
                    <div className="d-flex align-items-center">
                    <Themetoggle />
                    <button className="menu__button nav_ac" onClick={handleToggle}>
                        {!isActive ? <VscClose /> : <VscGrabber />}
                    </button>
                    
                    </div>
                </div>
            </header>
        </>
    )
}