import React from "react";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import ChildSimpleClass from "./ChildSimpleClass";
import { Button, fabClasses, TextField } from "@mui/material";
import { FormatAlignJustifyRounded } from "@mui/icons-material";

class SimpleClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Chavan",
      count: 0,
      show: true,
    };
    
    //here created inc() function without any function or const keyword
    //we need to bind method in class componenet
    this.inc = this.inc.bind(this);
  }

  log = "SimpleClass Class ";

  inc() {
    this.setState((prevState) => ({ count: prevState.count + 5 }));
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () =>
    this.setState((prevState) => ({ count: prevState.count - 1 }));

  componentDidMount() {
    console.log(this.log + " componentDidMount");
    this.setState((currState) => ({ count: (currState.count = 10) }));
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(this.log + " componentDidUpdate");
    //console.log("PREV "+prevState.state.count);
    if (this.state.count < 50) {
      //this.setState((currState) => ({ count: currState.count + 10 }));
    }
    debugger;
    /*    console.log("Curr " +this.state.count + ", Prev Name = " + prevState.name +
        ", Curr Name = " +  this.state.name
    ); */
    if (this.props.data !== prevProps.data) {
    }
  }

  render() {
    let child;
    if (this.state.show) {
      child = <SimpleClassB />;
    }
    // var loadingIcon = true;
    // const [loadingIcon, setLoadingIcon] = useState(true);
    //const [first, setfirst] = useState(second)

    return (
      <>
        <div>
          <span>Constructor initialization</span>
        
          <br />
            <Button color="success" variant="contained" onClick={this.inc}>
            Click Me!
          </Button>
        </div>
        <hr />
        <br />
        <br />
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>

        <TextField
          name="userinput"
          id="userinput"
          label={"user input"}
          placeholder="User Input"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <hr />
        <SimpleClassA />
        <hr />
        <Button variant="contained" color="success" onClick={this.increment}>
          Click Me! +
        </Button>
        <Button variant="contained" color="success" onClick={this.decrement}>
          Click Me! -
        </Button>
        <div style={{ color: "gray", fontSize: "20px" }}>SimpleClass</div>
        <hr />
        <TailSpin
          visible={true}
          height="80"
          width="80"
          id="tailSpin"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          textAlign="center"
          fontSize="80px"
          wrapperStyle={{}}
          wrapperClass=""
        />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition="Bounce"
        />

        <hr />
        <hr />
        {child}

        <Button
          variant="contained"
          color="success"
          onClick={() => this.setState({ show: false })}
        >
          Show Class B
        </Button>
      </>
    );
  }
}

class SimpleClassA extends SimpleClass {
  log = "SimpleClassA ";
  componentDidMount() {
    console.log(this.log + "componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.log + "componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log(this.log+" componentWillUnmount");
    window.alert(this.log + " componentWillUnmount");
  }

  render() {
    return <>SimpleClassA</>;
  }
}

class SimpleClassB extends React.Component {
  log = "SimpleClassB ";
  componentDidMount() {
    console.log(this.log + "componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.log + "componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log(this.log+" componentWillUnmount");
    window.alert(this.log + " componentWillUnmount");
  }

  render() {
    return <>SimpleClassB</>;
  }
}

export default SimpleClass;
