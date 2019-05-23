import React from 'react';
// import { Link } from 'react-router-dom'
import './Chat.css'

import Mensagem from '../Mensagem/Mensagem'

export default class Login extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)


        this.state = {
            input: '',
            msg: [],
        }
    }


    render() {
        return (
            <div className="Chat">
                <nav>Lorem Nav</nav>
                <div className="Painel">
                    {/* <div className="Feed">
                        {this.state.text.map(msg => (<p>{msg}}</p>))}
                    </div> */}
                    <Mensagem />
                    <Mensagem />
                    <Mensagem />
                    <div className="Lorem">
                        <input className="Input"
                            placeholder="Mensagem"
                            onChange={({ nativeEvent }) => {
                                this.setState({ input: nativeEvent.target.value })
                            }}
                            value={this.state.input}
                        />
                        <button className="Enviar" onClick={() => this._sendMensage()}>Enviar</button>
                    </div>

                </div>
            </div>
        );
    }


    _sendMensage() {
        // const mensage = this.state.text;
    }

}