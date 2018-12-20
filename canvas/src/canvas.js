import React, {Component} from "react";
import ColourSelector from "./ColourSelector";
//import App from "./App";


class Canvas extends Component {
    state = {hex: "#ff0000",
             width: 400,
             height: 400
            }

    constructor(props){
        super(props);
        this.canvasRef = React.createRef();

    }

    componentDidUpdate(){
        this.setContext();
    }

    setContext(){
        this.context = this.canvasRef.current.getContext("2d");
        this.context.strokeStyle = this.state.hex;
        this.context.lineJoin = "round";
        this.context.lineWidth = 3;
    }
    componentDidMount() {

    }
    onColourSelectorChange = (hex) => {
        this.setState({hex})
    }

    onCanvasMouseDown = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        this.setState({coords:[x,y]});
    }

    onCanvasMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const {coords, height,width} = this.state;

        if(x>0 && y >0 && x<width && y < height) {
            if(coords){
                this.context.beginPath();
                this.context.moveTo(coords[0],coords[1]);
                this.context.lineTo(x,y);
                this.context.closePath();
                this.context.stroke();
                this.setState({coords: [x,y]})
            }
        }else {
            this.setState({coords:null})
        }
    }

    onCanvasMouseUp = (event) => {
        this.setState({coords:null});
    }

    // componentDidUpdate() {
    //     console.log
    // }

    render() {
        const {hex,width, height} = this.state;

        return (
            <div>
                <div>
                        <ColourSelector 
                        hex={hex}
                        onColourSelectorChange={this.onColourSelectorChange} 
                        />
                </div>
                <canvas 
                    ref = {this.canvasRef}
                    width={width}
                    height = {height}
                    style = {{border: "6px solid black"}}
                    onMouseMove = {this.onCanvasMouseMove}
                    onMouseDown= {this.onCanvasMouseDown}
                    onMouseUp = {this.onCanvasMouseDown}
                    //onMouseExit
                />
            </div>
        )
    }
    onCanvasMouseMove_dublicate = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const {coords, height,width} = this.state;

        if(x>0 && y >0 && x<width && y < height) {
            if(coords){
                this.context.beginPath();
                this.context.moveTo(coords[0],coords[1]);
                this.context.lineTo(x,y);
                this.context.closePath();
                this.context.stroke();
                this.setState({coords: [x,y]})
            }
        }else {
            this.setState({coords:null})
        }
    }


}

export default Canvas;