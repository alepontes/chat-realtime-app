import React from 'react';
import './Mensagem.css'

export default class Mensagem extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        const { name, text, date, me } = props.msg

        this.state = {
            name,
            text,
            date,
            me,
        }
    }


    render() {

        if (this.props.msg.newConnection)
            return (
                <div className="newConnection">
                    <p>{this.props.msg.newConnection.name} se conectou</p>
                </div>
            );


        return (
            <div className={this.state.me ? "Right" : "Left"}>
                <div className={this.state.me ? "Mensagem Me" : "Mensagem"}>
                    {!this.state.me && <p className="Name" >{this.state.name}</p>}
                    <p className="Text">{this.state.text}</p>
                    <p className="Date">{this.state.date}</p>
                </div>
            </div>
        );
    }


}