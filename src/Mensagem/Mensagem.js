import React from 'react';
import './Mensagem.css'

export default class Login extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        // const {name, text, date} = props.msg


        const name = "Alexandre"
        const text = "Lorem ipsum dolor sit amet constructor ipsum dolor sit amet constructo ipsum dolor sit amet constructor ipsum dolor sit amet constructor ipsum dolor sit amet constructor"
        const date = "qui, 10:30"


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