import React, { Component } from 'react';
import LPiece from './LPiece'
import '../App.css'

class Board extends Component {
    render() {
        return (
            <div className = "mainBoard">
                <LPiece/>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
                <div className = "board-bump"></div>
            </div>
        );
    }
}

export default Board;