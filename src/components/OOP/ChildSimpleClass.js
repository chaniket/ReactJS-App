import React from "react";

class ChildSimpleClass extends React.Component {
  render() {
    return (
      <>
        <div>ChildSimpleClass</div>
        <h1>{this.props.name}</h1>
      </>
    );
  }
}

export default ChildSimpleClass;
