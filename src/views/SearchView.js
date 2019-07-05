import React, { Component } from "react";

import {
  FlexboxGrid,
  Container,
  Content,
  Input,
  Button,
  Icon,
  Alert
} from "rsuite";
import FlexboxGridItem from "rsuite/lib/FlexboxGridItem";

import search from "../services/api.js";

import "../assets/css/SearchView.css";

class SearchView extends Component {
  constructor(props) {
    super(props);

    this.state = { query: "", isLoading: false };
  }

  render() {
    return (
      <div className="bg">
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
                  onChange={value => {
                    this.setState({ query: value });
                  }}
                />
              </FlexboxGrid.Item>
              <FlexboxGridItem colspan={2}>
                <Button
                  loading={this.state.isLoading}
                  color="cyan"
                  size="lg"
                  appearance="primary"
                  style={{ marginLeft: 6 }}
                  onClick={() => {
                    if (this.state.query !== "") {
                      this.setState({ isLoading: true });
                      search(this.state.query).then(response => {
                        this.setState({ isLoading: false });
                        this.props.setQuery(this.state.query);
                        this.props.setData(response);
                      });
                    } else {
                      Alert.warning("Oops, you didn't enter anything!");
                    }
                  }}
                >
                  <Icon icon="search" />
                  &nbsp;&nbsp; Search
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
