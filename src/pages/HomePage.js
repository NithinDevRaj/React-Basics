import React from "react";
// import ListItem from "./Listitem";
import Tools from "../component/tools";
import SimpleList from "../list/simpleList";
// let obj = [
//   {
//     id: 1,
//     title: "appointment for Octob",
//     descr: "The patient is rescheduled to october",
//     isActive: true,
//   },
//   {
//     id: 2,
//     title: "appointment for October",
//     descr: "The patient is rescheduled to october",
//     isActive: false,
//   },
//   {
//     id: 3,
//     title: "appointment for Octobe",
//     descr: "The patient is rescheduled to october",
//     isActive: true,
//   },
// ];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeState: "all",
      message: "",
    };
  }
  onListChange(evt) {
    // const newList = obj.filter((v)=>{
    //     if(evt.target.value==="all"){
    //         return true
    //     }
    //     if(evt.target.value==="active"){
    //         return v.isActive===true
    //     }
    //     if(evt.target.value ==="nonActive"){
    //         return v.isActive===false
    //     }
    //     return false
    // });
    // console.log(newList)
    // this.setState({data:newList},()=>{
    //     console.log("come on guys ")
    // })

    // this.setState((state)=>{
    //     return {
    //         data:newList
    //     }
    // })
    this.setState({
      activeState: evt.target.value,
    });
  }
  onClickChange(change) {
    console.log("this is change", change);
    this.setState({
      activeState: change,
    });
    console.log("nithin try hard");
  }

  componentDidMount() {
    console.log("All glory to god");

    fetch("/data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("this is updated by nithin rajs");

    if (prevState.message !== this.state.message) {
      this.setState({
        message: "nithn",
      });
    }

    //  this.setState({
    //   message:"message"
    //  })
  }
  componentWillUnmount() {
    console.log("this is unmounted hei everyone");
  }
  handleDelete = (id) => {
    // console.log("entered function");
    // console.log("L=", l);
    // const upDated = this.state.data.filter((ele) => ele.id !== id);
    // console.log("hey=", upDated);

    // this.setState({
    //   data: upDated
    // })

    // console.log("this is new set =", this.state.data);
    const updatedData = this.state.data.filter((item) => item.id !== id);

    this.setState({ data: updatedData });
  };

  render() {
    const { activeState } = this.state;

    let newList = this.state.data.filter((v) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "active") {
        return v.isActive === true;
      }
      if (activeState === "nonActive") {
        return v.isActive === false;
      }
      return false;
    });
    return (
      <Tools activeState={activeState} onAction={this.onListChange.bind(this)}>
        <SimpleList
          onClickChange={this.onClickChange.bind(this)}
          data={newList}
          onAction={this.handleDelete}
        />
      </Tools>
    );
  }
}

export default HomePage;
