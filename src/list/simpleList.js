import React from "react";
import ListItem from "./Listitem";

function simpleList(props){
    const{
        data,
       onAction,
       onClickChange
    }=props
    return   <div className="list-item">
    {data.map((v) => {
      return (
        <ListItem
          key={v.title}
          title={v.title}
          descr={v.descr}
          isActive={v.isActive}
          onDelete={() => {
            onAction(v.id);
          }
        }
        onListChange={onClickChange}
        />
      );
    })}

    {/* <ListItem />
          <ListItem />
          <ListItem /> */}
  </div>
}

export default simpleList;