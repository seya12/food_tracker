import React from "react";

const Title = () => {
  return <h1>Produktübersicht</h1>;
};

export default Title;

/*
functional component vs ES6 class:

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <h1>Produktübersicht</h1>;
  }
}

without JSX:
const Title = () => {
  return React.createElement('h1', null, "Produktübersicht");
};

*/
