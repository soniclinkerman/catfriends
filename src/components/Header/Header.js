import React, { Component } from "react";
import CounterButton from "../CounterButton";

class Header extends Component {

    // shouldComponentUpdate(nextProps, nextState){
    //     return false;
    // }

    render(){
        console.log('Header')
        return (
            <div>
        <p className="title">Cat Friends!</p>
        <CounterButton color={"red"}/>
        </div>
        )
    }
}

export default Header