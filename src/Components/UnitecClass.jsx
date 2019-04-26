import React, { Component } from 'react';
import PropTypes from "prop-types";

class UnitecClass extends Component {
    constructor(props) {
        super(props);
        this.state = { unitecClassName: 'CCC 307' };
        this.update1 = this.update1.bind(this);
        this.update2 = this.update2.bind(this);
        this.update3 = this.update3.bind(this);
    }
    update1(event) {
        this.setState({ unitecClassName: 'CCC 404' })
    }

    update2(event) {
        this.setState({ unitecClassName: 'CCC 594' })
    }

    update3(event) {
        this.setState({ unitecClassName: 'LCC 104' })
    }

    render() {
        return (
            <div>
                <div>
                    <label>Nombre de Estudiante: {this.props.unitecStudentName}</label>
                </div>
                <div>
                    <label>Nombre de CLase {this.state.unitecClassName}</label>
                </div>
                <button onClick={this.update1} >CCC 404</button>
                <button onClick={this.update2} >CCC 594</button>
                <button onClick={this.update3} >LCC 104</button>
            </div>
        )
    }
}

UnitecClass.propTypes = {
    unitecStudentName: PropTypes.string.isRequired,
};

UnitecClass.defaultProps = {
    unitecStudentName: 'Hello World!',
};

export default UnitecClass;