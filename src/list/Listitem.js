import React from "react";
import Label from "./label";
import "./Listitem.css";

function ListItem(props) {
  const { title, descr, isActive, onDelete,onListChange } = props;
  return (
    <div className="list-item">
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete}>Delete</label>
      </div>
      <div className="list-descr">{descr}</div>
      <div className="list-label">
        <Label onListChange={onListChange}
          onAction={() => {
            console.log("parent clicked");
          }}
          isActive={isActive}
          y={true}
          j={"nithin"}
        />
      </div>

      {/* <Label/>
      <Label/> */}
    </div>
  );
}

export default ListItem;
