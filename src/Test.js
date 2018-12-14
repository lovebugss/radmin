/**
 * Created by renjp on 2018/12/14.
 */
import React, {Component} from 'react';


class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

        )
    }

}

export default Test;