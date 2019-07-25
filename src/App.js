import React, { Component} from "react";
import styled from 'styled-components';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Container className='app'>
        <Navbar />
      </Container>
    );
  }
}

export default App;

let Container = styled.div`
  background:black;
  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif
`;