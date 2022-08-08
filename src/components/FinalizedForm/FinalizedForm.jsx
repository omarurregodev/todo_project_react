import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


const FinalizedForm = ({fCompra}) => {
    

    const datosComprador = () => {
        let name = document.getElementById('first_name').value;
        let lastName = document.getElementById('last_name').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phone_number').value;
        let checkboxTerms = document.getElementById('checkboxTerms');

        if (name.length > 0 && lastName.length > 0 && email.length > 0 && phoneNumber > 0 && checkboxTerms.checked) {
            const dataComprador = {
                name: name,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber
            }
            fCompra(dataComprador);
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Los campos deben estar totalmente llenos.',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <div className="row container">
            <h3 className="left-align">Datos del Cliente</h3>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" required/>
                        <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" required/>
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" required/>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="phone_number" type="number" className="validate" required/>
                        <label for="phone_number">Teléfono</label>
                    </div>
                </div>
                <div className="row">
                <p>
                    <label>
                        <input type="checkbox" id="checkboxTerms"/>
                        <span>Acepto terminos, condiciones y tratamiento de datos personales</span>
                    </label>
                </p>
                </div>
            </form>
            <button className="btn-large waves-effect waves-light green lighten-2" onClick={datosComprador}><i class="material-icons left">done</i>Finalizar Compra</button>
        </div>
    )
}

export default FinalizedForm;


