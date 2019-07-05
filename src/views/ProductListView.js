import React, { Component } from "react";

import { Container, Header, Content, Divider, FlexboxGrid } from "rsuite";
import ProductCard from "../components/ProductCard.js"

import "../assets/css/ProductListView.css";
export default class ProductListView extends Component {
  render() {
    return (
      <div className="wrapper">
        <Container>
          <Header style={{"paddingTop": 25}}>
            <h1 style={{fontWeight: "bold"}}>Showing Results for "test"</h1>
            <Divider style={{"height": 2, "background-color": "lightgrey"}}/>
          </Header>
          <Content>
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item style={{marginTop: 30}} colspan={7}>
                <ProductCard/>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item style={{marginTop: 30}} colspan={7}>
                <ProductCard/>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item style={{marginTop: 30}} colspan={7}>
                <ProductCard/>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item style={{marginTop: 30}} colspan={7}>
                <ProductCard/>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item style={{marginTop: 30}} colspan={7}>
                <ProductCard/>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    );
  }
}
