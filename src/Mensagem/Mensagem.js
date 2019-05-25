import React from 'react';
import './Mensagem.css'

export default class Login extends React.Component {

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

        console.log("Me: " + this.state.me)

        return (
            <div className={this.state.me ? "Right" : "Left"}>
                <div className={this.state.me ? "Mensagem Me" : "Mensagem"}>
                    <p className="Name" >{this.state.name}</p>
                    <p className="Text">{this.state.text}</p>
                    <p className="Date">{this.state.date}</p>
                </div>
            </div>
        );
    }


}