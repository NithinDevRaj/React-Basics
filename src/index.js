import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyApp from "./MyApp";
// import ListItem from "./list/Listitem";
// import Header from "./component/Header";
// import Footer from "./component/Footer";
// import HomePage from "./pages/HomePage";
// import List from "./list/List";
// import App from "./App";

// const b =React.createElement(
//   "h1",
//   {
//     id:"nithin"
//   },
// "holy to the lord"
// )

// const c = React.createElement(
// "div",
// {
//   className:"nithin"
// },
//  React.createElement(
//   "h1",
//   {
//     id:"ola"
//   },
//   "hey its me"
//  )
// )
// const disabled = true
// const objStyle={
//   backgroundColor:"green"
// }

// const a =<h1 id='hey'>NITHIN LOves His Family</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <h1 style ={objStyle}>HEY JESUS</h1>
//     <p style={{backgroundColor:"red"}}>{disabled?"he":"hoi"}</p>
//    {a}
//    {b}
//    {c}

//     {/* <App /> */}
//   </React.StrictMode>
// );

// -------------------------------------------------------------

// const array =["label 0", "label 1","label 2","label 3","label 4"]

// function on(){
//   console.log("clicked")
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <div>
//        {/* {
//         [
//           <label key={1}>one</label>,
//           <label key={2}>two</label>
//         ]
//        }  */}
//           {
//           array.map((v)=>{
//             return <label onClick={on} key={v}>{v+" " }</label>
//           })
//           }

//       </div>

//   </React.StrictMode>
// );
// ------------------------------------------------------------------------
// function ListItem() {
//   return(
//     <div className="list-item">
//             <hr />
//             <div className="list-title">
//               <h4>My title one</h4>
//             </div>
//             <div className="list-descr">This is very big description</div>
//             <div className="list-label">
//               <span>Label 1</span>
//               <span>Label 2</span>
//               <span>Label 3</span>
//             </div>
//             <hr />
//           </div>
//   )
// }

// const b =<div className="list-item">
// <hr />
// <div className="list-title">
//   <h4>My title one</h4>
// </div>
// <div className="list-descr">This is very big description</div>
// <div className="list-label">
//   <span>Label 1</span>
//   <span>Label 2</span>
//   <span>Label 3</span>
// </div>
// <hr />
// </div>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <div className="app">
//       <div className="app-header">
//         <span className="header-title">Nithin Raj</span>
//         <span>Home</span>
//         <span>Usage</span>
//         <span>Settings</span>
//         <span>Logout</span>
//       </div>
//       <div className="app-body">
//         <div className="list-item">
//           {/* <ListItem/> */}
//           {/* <ListItem/> */}
//           <ListItem/>
//            {ListItem()}
//           {b}
//         </div>
//       </div>
//       <div className="app-footer"></div>
//     </div>
//   </React.StrictMode>
// );

// ---------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyApp/>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//   </React.StrictMode>
// );

// ----------------------------------------------------------------------------
// ReactDOM.render(
// <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
