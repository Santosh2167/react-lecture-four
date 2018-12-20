import React, {Component} from "react";

class ColourSelector extends Component {
    state = {hex: this.props.hex}
    
    // onInputChange(event) {
    //     console.log(event.target.value);

    // }

    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        const {hex} = this.props;
        return(
            <div>
                <input 
                    type="color" 
                    //defaultValue = "0000ff"
                    value={hex} 
                    // onChange={this.onInputChange}
                    onChange={event => this.setState({hex: event.target.value})}
                /> 
            </div>
        );
    }
}

ColourSelector.defaultProps = {
    hex: "#ffff00"
};

export default ColourSelector;