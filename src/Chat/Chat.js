import React from 'react';
// import { Link } from 'react-router-dom'
import './Chat.css'
import socketIOClient from "socket.io-client";
import Mensagem from '../Mensagem/Mensagem'

const endpoint = "http://127.0.0.1:8000"
const socket = socketIOClient(endpoint);

export default class Login extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)


        this.state = {
            input: '',
            response: '',
            msg: [],
        }
    }


    componentDidMount() {
        socket.on('recivedMensage', msg => this._newMensage(msg))
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }


    render() {
        return (
            <div className="Chat">
                <nav className="Nav">Alexandre Pontes</nav>
                <div className="Painel">
                    <div className="Feed" onScroll={({ nativeEvent }) => { }}>
                        {this.state.msg.map(msg => <Mensagem msg={msg} />)}
                        <div style={{ float: "left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                    <div className="Lorem">
                        <input className="Input"
                            placeholder="Mensagem"
                            onKeyPress={(event) => {
                                if (event.key == 'Enter')
                                    this._sendMensage()

                            }}
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


        if (!this.state.input.trim())
            return


        const mensage = {
            name: "Alexandre",
            text: this.state.input,
            date: "Terça",
        };


        this._newMensage(mensage, true)
        socket.emit("sendMensage", mensage)


        this.setState({ input: '' })

    }

    _newMensage(mensage, me = false) {

        mensage.me = me;

        const msg = [
            ...this.state.msg,
            mensage,
        ]

        this.setState({ msg })

    }
}