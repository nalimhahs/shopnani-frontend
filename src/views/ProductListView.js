import React, { Component } from "react";

import { Container, Header, Content, Divider, FlexboxGrid } from "rsuite";
import ProductCard from "../components/ProductCard.js";

import "../assets/css/ProductListView.css";

// Collects the props passed down by the SearchView cmponent
// and passes it to the ProductCard component to be rendered
// This components merely arranges the content in a pleasing manner

export default class ProductListView extends Component {
  render() {
    return (
      <div className="wrapper">
        <Container>
          <Header style={{ paddingTop: 25 }}>
            <h1 style={{ fontWeight: "bold" }}>
              Showing Results for "{this.props.query}"
            </h1>
            <Divider style={{ height: 2, backgroundColor: "lightgrey" }} />
          </Header>
          <Content>
            <FlexboxGrid justify="space-around">
              {this.props.data.map(content => (
                <FlexboxGrid.Item style={{ marginTop: 30 }} colspan={7}>
                  <ProductCard
                    data={content.productBaseInfoV1}
                    key={content.productBaseInfoV1.productID}
                  />
                </FlexboxGrid.Item>
              ))}
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    );
  }
}
