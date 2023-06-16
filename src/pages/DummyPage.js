import React, { Component } from "react";

class DummyPage extends Component{
    componentDidMount(){
        console.log("component did mount")
    }
    componentWillUnmount(){
        console.log("component will unMount ")
    }
    render(){
    return (
        <div>
            {this.props.name}
        </div>
    )
    }
}
export default DummyPage;