import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

import "../styles/styles.css"
import logo_facebook from "../assets/facebook.png"
import logo_google from "../assets/google.png"


export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function sendData() {
        let input_email = document.querySelector("#email");
        let input_password = document.querySelector("#password")
        let error = document.querySelectorAll(".errors span")


        axios.post("http://localhost:3333/users", {
            userEmail: email,
            userPassword: password
        }).then((response) =>{

            if (validarCampos(error, input_email, input_password)){
                if (response.data === "Permitir"){
                    input_email.style.borderColor = "#001eff"
                    input_password.style.borderColor = "#001eff"
                    navigate("/success")
                }
                else{
                    error.item(2).style.display = "block"
                    input_email.style.borderColor = "#ff0000"
                    input_password.style.borderColor = "#ff0000"
                }
            }

        }).catch((error) =>{
            console.log(error)
        })
    }

    function validarCampos(error, input_email, input_password) {

        let validacao = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (validacao.test(input_email.value) && input_password.value.length >= 4) {
            error.forEach((item) => {
                item.style.display = "none"
            })
            input_email.style.borderColor = "#001eff"
            input_password.style.borderColor = "#001eff"
            return 1
        }
        else {
            if (input_password.value.length < 4) {
                error.item(1).style.display = "block"
                input_password.style.borderColor = "#ff0000"
                if (validacao.test(input_email.value)) {
                    error.item(0).style.display = "none"
                    input_email.style.borderColor = "#001eff"
                }
                else { 
                    error.item(0).style.display = "block"
                    input_email.style.borderColor = "#ff0000"
                }
            }
            else {
                error.item(0).style.display = "block"
                input_email.style.borderColor = "#ff0000"
                error.item(1).style.display = "none"
                input_password.style.borderColor = "#001eff"
            }
        }
    }


    return (
        <main className="form">
            <h1>LOGIN</h1>
            <div className="form-input">
                <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                <label htmlFor="email">E-mail</label>
            </div>
            <div className="form-input">
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                <label htmlFor="password">Senha</label>
                <div className="links">
                    <a href="#"><p>Esqueceu a senha?</p></a>
                    <a href="#"><p>Não possui conta?</p></a>
                </div>
            </div>
            <div className="errors">
                <span>O e-mail está incorreto</span>
                <span>A senha deve ter mais de 4 dígitos.</span>
                <span>E-mail e senha não correspondentes</span>
            </div>
            <button className="button-sign-in" onClick= {sendData}>Entrar</button>

            <hr></hr>

            <div className="social-media-section">
                <div className="social-media-buttons" id="facebook">
                    <img src={logo_facebook} alt="Facebook logo" />
                    <p>Facebook</p>
                </div>
                <div className="social-media-buttons" id="google">
                    <img src={logo_google} alt="Google logo" />
                    <p>Google</p>
                </div>
            </div>
        </main>
    )
}