import React, { Component } from "react";
import { FlexboxGrid, Container, Content, Input, Button, Icon } from "rsuite";

import "../assets/css/SearchView.css";
import FlexboxGridItem from "rsuite/lib/FlexboxGridItem";

class SearchView extends Component {
  render() {
    return (
      <div className="show-grid">
        <Container>
          <Content>
            <FlexboxGrid
              justify="center"
              align="middle"
              style={{ height: "100vh" }}
            >
              <FlexboxGrid.Item colspan={10}>
                <Input
                  placeholder="What are you looking for?"
                  className="shadow"
                />
              </FlexboxGrid.Item>
              <FlexboxGridItem colspan={2}>
                <Button
                  color="cyan"
                  size="lg"
                  appearance="primary"
                  style={{ "margin-left": 6 }}
                >
                  <Icon icon="search" />
                  &nbsp;&nbsp;Search
                </Button>
              </FlexboxGridItem>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    );
  }
}

export default SearchView;

// style={{ "margin-top": 20 }}
