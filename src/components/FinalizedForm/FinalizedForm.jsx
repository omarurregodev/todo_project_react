import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { Component } from "react";


export default class FinalizedForm extends Component {



    render() {
        return (
            <div className="row container">
                <h3 className="left-align">Datos del Cliente</h3>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="phone_number" type="number" className="validate" />
                            <label for="phone_number">Teléfono</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="tc_numero" type="text" className="validate" />
                            <label for="tc_numero">Número de Tarjeta de credito</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="tc_fecha" type="date" className="validate" />
                            <label for="tc_fecha">Fecha de vencimiento TC</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="tc_ccv" type="text" className="validate" />
                            <label for="tc_ccv">CCV</label>
                        </div>
                    </div>
                    <div className="row">
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Acepto terminos, condiciones y tratamiento de datos personales</span>
                        </label>
                    </p>
                    </div>
                </form>
            </div>
        )
    }


}

