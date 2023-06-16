import React from 'react';
import './label.css';
class Label extends React.Component{
    
    render (){
        const props = this.props
        // console.log(props.isActive)
        const style = props.isActive?{background :"red"}:{background:"green"}
        // console.log(props.j)
        return  <span className='list-label-item' style={style}  onClick={() => {
            props.onAction();
            props.onListChange(props.isActive ? "active" : "nonActive");
          }}>{props.isActive?"Active":"notActive"}</span>
    }
}

export default Label;