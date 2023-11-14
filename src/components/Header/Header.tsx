import React from "react";
import classes from "./Header.module.css"

export const Header: React.FC = () => {

    let gago2 = "g";
    let gago1 = "Ga" + gago2 + "o";
    const gago = gago1



    return (
        <header className={classes.header}>
            <img src={"https://logo.com/_next/static/media/logo-color.834b40cf.svg?w=96&q=80"}/>
        </header>
    )



}