import React, { Component } from 'react';
import { connect } from  'react-redux'

class Incrementor extends Component {
    handleClick() {
        this.props.dispatch({
            type: 'INCREMENT_NUMBER'
        });
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Click Me!</button>
            </div>
        );
    }
}

// function mapStateToProps(state) {

// }

export default connect()(Incrementor);