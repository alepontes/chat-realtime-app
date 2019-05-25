import React from 'react';
// import { Link } from 'react-router-dom'
import './Chat.css'
import socketIOClient from "socket.io-client";
import Mensagem from '../Mensagem/Mensagem';
import { Redirect } from 'react-router-dom';

import { bindActionCreators } from 'redux';

import * as accountActions from '../actions/account';
import { connect } from 'react-redux';

const endpoint = "http://127.0.0.1:8000"
const socket = socketIOClient(endpoint);

class Chat extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)


        this.state = {
            isLogged: !!this.props.account.token,
            input: '',
            response: '',
            msg: [],
        }

    }


    componentDidMount() {

        if (this.state.isLogged)
            socket.emit('Hello', { name: this.props.account.name })

        socket.on('newConnection', data => this._newConnection(data))
        socket.on('previusMenssage', msg => msg.map(item => this._newMenssage(item)))
        socket.on('recivedMenssage', msg => this._newMenssage(msg))
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
                {!this.state.isLogged && <Redirect to='/' />}
                <nav className="Nav">{this.props.account.name}</nav>
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


        const menssage = {
            name: this.props.account.name,
            text: this.state.input,
            date: "Terça",
            token: this.props.account.token,
        };

        const a = {
            Authorization: "LoremToken"
        }


        socket.emit("sendMenssage", menssage, a)
        this._newMenssage(menssage, true)


        this.setState({ input: '' })

    }

    _newMenssage(menssage, me = false) {

        menssage.me = me;

        const msg = [
            ...this.state.msg,
            menssage,
        ]

        this.setState({ msg })

    }

    _newConnection(connection, me = false) {

        const msg = [
            ...this.state.msg,
            connection,
        ]

        this.setState({ msg })
    }
}


const mapStateToProps = state => ({
    account: state.account,
})


const mapDispatchToProps = dispath =>
    bindActionCreators(accountActions, dispath)


export default connect(mapStateToProps, mapDispatchToProps)(Chat)

