import React from "react";
import ReactToPrint from "react-to-print";
import Print from "./Printout/Admin";
class ComponentToPrint extends React.Component {
  render() {
    return <Print />;
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <button style={{ cursor: "pointer" }}>Print this out!</button>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
