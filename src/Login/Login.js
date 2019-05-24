import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'


export default class Login extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)


        this.state = {
            name: '',
            pass: '',
            err: false,
        }


    }


    render() {
        return (
            <div className="Login">
                <div className={this.state.err ? "Form Err" : "Form"}
                    onKeyPress={(event) => {
                        if (event.key == 'Enter') {
                            this._login()
                        }
                    }}>
                    <h1>Login Screen</h1>
                    <input placeholder="Username"
                        onChange={({ nativeEvent }) => {
                            this.setState({ name: nativeEvent.target.value })
                        }}
                        value={this.state.name}
                    />
                    <input placeholder="Pass"
                        onChange={({ nativeEvent }) => {
                            this.setState({ pass: nativeEvent.target.value })
                        }}
                        value={this.state.pass}
                    />
                    <button className="Button" onClick={() => this._login()} >Fazer Login</button>
                    {/* <Link className="Button" to="/chat">Fazer Login</Link> */}
                </div>
            </div>
        );
    }


    _login() {

        let { name, pass } = this.state;

        const body = {
            name,
            pass,
        }

        fetch('http://localhost:8001/account', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            return response.json();
        }).then((data) => {

            if (data.err === "Conta Inexistente")
                return this.setState({ err: true })

            //Add no Redux
            console.log(data)
            // data.token

        });

    }

}