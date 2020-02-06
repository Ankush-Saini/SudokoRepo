import React, {Component} from "react";

export default class Cell extends Component{

    render(){
        return (
            <button className="square" onChange="this.style.background:'grey';">{this.props.value}</button>
        );
    }
}