import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import DummyPage from "./pages/DummyPage";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "home",
    };
  }

  handleMenuSelect(value) {
    console.log(value);
    this.setState({
      currentSelected: value,
    });
  }
  getPage(){
    const {currentSelected}=this.state
    switch(currentSelected){
        case 'home': return <HomePage/>
        case 'usage':return <DummyPage key="usage" name="Usage"/>
        case 'settings':return <DummyPage name="Settings" key ="settings"/>
        case 'logout':return <DummyPage name="Logout" key="logout" />
        default: break;
 
    }
  }
  render() {
    console.log()
    return (
      <div className="app">
        <Header onMenuSelect={this.handleMenuSelect.bind(this)} />
        <div className="app-body">
          {/* <HomePage />
           */}
           {this.getPage()}
        </div>
        <Footer />
      </div>
    );
  }
}
export default MyApp;
