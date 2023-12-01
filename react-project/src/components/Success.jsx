import React from "react"
import "../styles/styles.css"
import { useNavigate } from "react-router-dom"

import check from "../assets/check-solid.svg"

export default function Success(){
    
    const navigate = useNavigate()

    return(


        <div className="form">
            <h2>Bem vindo(a)</h2>
            <img src={check} alt="" />
            <button className="button-sign-in" onClick={() =>{navigate("/")}}>Retornar</button>
        </div>
    )
}