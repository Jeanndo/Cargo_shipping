import React from "react";
import ReactToPrint from "react-to-print";
import Admin from '../Admin/Admin';
class ComponentToPrint extends React.Component {
  render() {
    return (
      <Admin/>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div >
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;