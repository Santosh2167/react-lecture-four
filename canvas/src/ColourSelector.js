import React, {Component} from "react";

class ColourSelector extends Component {
    state = {hex: this.props.hex}

    // constructor(props) {
    //     super(props);
    //     this.onInputChange = this.onInputChange.bind(this);
    // }
    
    onInputChange = (event) => {
        //this.setState({hex: event.target.value})
        const {onColourSelectorChange} = this.props;
        onColourSelectorChange(event.target.value);
    }

    componentDidUpdate(){
        //event => this.setState({hex: event.target.value})
        console.log(this.state);
    }

    render(){
        const {hex} = this.props;
        return(
            <div>
                <input 
                    type="color" 
                    value={hex} 
                    // onChange={this.onInputChange}
                    onChange={this.onInputChange}
                /> 
            </div>
        );
    }
}

ColourSelector.defaultProps = {
    hex: "#ffff00"
};

export default ColourSelector;