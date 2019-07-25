import React, { Component} from "react";
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Container>
        <MainBar>
          <LeftList>
            <Logo>Netflix</Logo>
            <LeftInner>
              <Home>Home</Home>
              <div>Series</div>
              <div>Films</div>
              <div>Recently Added</div>
              <div>My List</div>
            </LeftInner>
          </LeftList>
          <RightList>
            <div><i class="fa fa-search"></i></div>
            <div>CHILDREN</div>
            <div><i class="fa fa-bell"></i></div>
          </RightList>
        </MainBar>
      </Container>
    );
  }
}

export default App;


let Home = styled.div`
  color:#A6A6A6;
  font-weight:700;
`;

let Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background:black;
  color:#707070;
`;

let MainBar = styled.div`
  display:flex;
  padding:1%;
  justify-content:space-between;
  font-size:13px;
`;
let LeftList = styled.div`
  display:flex;
  justify-content: space-around;
  width: 32%;
`;
let RightList = styled.div`
  display:flex;
  justify-content: space-around;
  width: 13%;
  margin-top: auto;
  margin-bottom: auto;
`;

let Logo = styled.div`
  font-size:22px;
  margin-right: 7%;
  color: #B81411;
`;

let LeftInner = styled.div`
  display:flex;
  justify-content: space-around;
  width: 88%;
  margin-top: auto;
  margin-bottom: auto;
`;