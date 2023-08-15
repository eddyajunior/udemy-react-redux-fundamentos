import React, { Component } from 'react';

class Contador extends Component {

    constructor(props){
        super(props)

        this.inc = this.inc();
    }

    state = {
       numero: this.props.numeroInicial
    }

    inc() {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>         
                <p>{this.state.numero}</p>       
                <button onClick={this.inc}>+</button>
            </div>
        );
    }
}

export default Contador;