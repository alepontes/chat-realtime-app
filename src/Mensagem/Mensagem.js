import React from 'react';
import './Mensagem.css'

export default class Login extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        const { name, text, date } = props.msg

        this.state = {
            name,
            text,
            date
        }
    }


    render() {
        return (
            <div className="Mensagem">
                <p className="Name">{this.state.name}</p>
                <p className="Text">{this.state.text}</p>
                <p className="Date">{this.state.date}</p>
            </div>
        );
    }


}