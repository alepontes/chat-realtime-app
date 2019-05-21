import React from 'react';
import { Route, Link } from 'react-router-dom'

export default class Login extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <p>Login Screen</p>
                <ul>
                    <li>
                        <Link to="/chat">Ir para Chat</Link>
                    </li>
                </ul>
            </div>
        );
    }

}