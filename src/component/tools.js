import React from "react";

import AddNew from "./addNew";
import "./tools.css"
class Tools extends React.Component {
  componentDidUpdate(pP){
    if(pP!==this.props){
      const onlyChild = React.Children.only(this.props.children)
      const counts = React.Children.count(onlyChild.props.children)
      console.log(counts,"newnew enw")
    }
  }
  render() {
    const { children,onAction ,activeState} = this.props;
    const onlyChild = React.Children.only(children)
    const count = React.Children.count(onlyChild.props.children)
    console.log("this is onlyChild=",onlyChild)
    console.log("this is count",count)
    return (
      <div className="list-tools">
        <div className="list-header">
          <select value={activeState} onChange={onAction} style={{ backgroundColor: "pink" }}>
            <option value="all">all</option>
            <option value="active">Active</option>
            <option value="nonActive">nonActive</option>
          </select>
          <AddNew/>
        </div>
        {children}
        <div style={{ backgroundColor: "red" }} className="list-footer">
          total children {count}
        </div>
      </div>
    );
  }
}

export default Tools;
