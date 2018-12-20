import React, {Component} from "react";
import ColourSelector from "./ColourSelector";
import Canvas from "./canvas"

class App extends Component {
    render() {

        return(

            <div>
                <h1>Welcome To Your Drawing Pad</h1>
                <Canvas />

            </div>
        ) 
    }
}

export default App;