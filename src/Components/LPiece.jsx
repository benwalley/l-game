import React, { Component } from 'react';
import '../styles/LPiece.css'

class LPiece extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            player: undefined,
            mirror: 1,
            rotated: 0
        };
    }

    _handleRotate = (e) => {
        this._handleKeyDown(e)
    }

    selectHandler = () => {
        console.log("selected");
    }

    _handleKeyDown = (event) => {
        switch( event.keyCode ) {
            case 37:
                this.setState({rotated: this.state.rotated - 1});
                break;
            case 39:
                this.setState({rotated: this.state.rotated + 1});
                break;
            case 38:
                this.setState({mirror: this.state.mirror * -1});
                break;
            case 40:
                this.setState({mirror: this.state.mirror * -1});
                break;
            default:
                break;
        }
    }


    componentWillMount(){
        document.addEventListener("keydown", this._handleRotate);
    }

    render() {
        return (
            <div className = "L" >
                <div class = "l-square" onClick = {this.selectHandler}>
                    <div class = "l-circle"></div>
                </div>
                <div className="l-square" onClick = {this.selectHandler}>
                    <div className="l-circle"></div>
                </div>
                <div className="l-square" onClick = {this.selectHandler}>
                    <div className="l-circle"></div>
                </div>
                <div className="l-square l-last" onClick = {this.selectHandler}>
                    <div className="l-circle"></div>
                </div>
            </div>
        );
    }
}

export default LPiece;