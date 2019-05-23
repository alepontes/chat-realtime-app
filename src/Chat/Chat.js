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
            msg: [
                {
                    "name": "Alexandre",
                    "text": "Lorem ipsum olor sit amet constructor ipsum dolor sit amet constructo ipsum dolor sit amet constructor ipsum dolor sit amet constructor ipsum dolor sit amet constructor",
                    "date": "qui, 10:30",
                },
                {
                    "name": "Alexandre",
                    "text": "Lorem ipsum olor sit amet constructor ipsum dolor sit amet constructo ipsum dolor sit amet constructor ipsum dolor sit amet constructor ipsum dolor sit amet constructor",
                    "date": "qui, 10:30",
                },
                {
                    "name": "Alexandre",
                    "text": "Lorem ipsum olor sit amet constructor ipsum dolor sit amet constructo ipsum dolor sit amet constructor ipsum dolor sit amet constructor ipsum dolor sit amet constructor",
                    "date": "qui, 10:30",
                },
                {
                    "name": "Alexandre",
                    "text": "Lorem ipsum olor sit amet constructor ipsum dolor sit amet constructo ipsum dolor sit amet constructor ipsum dolor sit amet constructor ipsum dolor sit amet constructor",
                    "date": "qui, 10:30",
                },
                {
                    "name": "Alexandre",
                    "text": "Lorem ipsum olor sit amet constructor ipsum dolor sit amet constructo ipsum dolor sit amet constructor ipsum dolor sit amet constructor ipsum dolor sit amet constructor",
                    "date": "qui, 10:30",
                },
                {
                    "name": "Alexandre",
                    "text": "Lorem ipsum olor sit amet constructor ipsum dolor sit amet constructo ipsum dolor sit amet constructor ipsum dolor sit amet constructor ipsum dolor sit amet constructor",
                    "date": "qui, 10:30",
                },
            ],
        }
    }


    render() {
        return (
            <div className="Chat">
                <nav className="Nav">Alexandre Pontes</nav>
                <div className="Painel">
                    <div className="Feed">
                        {this.state.msg.map(msg => <Mensagem msg={msg} />)}
                    </div>
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