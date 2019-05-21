import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'

export default class Login extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="Login">
                <div className="Form">
                    <h1>Login Screen</h1>
                    <input placeholder="Username" />
                    {/* <input placeholder="Pass" type="password" /> */}
                    <input placeholder="Pass" />
                    <Link className="Button" to="/chat">Fazer Login</Link>
                </div>
            </div>
        );
    }

}