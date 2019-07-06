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

// Gets the search query from the user and collects the data from the api service
// then passes it down to the ProductListView component

class SearchView extends Component {
  constructor(props) {
    super(props);
    // the isLoading state checks if the data has been fetched yet
    this.state = { query: "", isLoading: false };
  }

  // Handles the clicking of the search button or pressing enter.
  handleSubmit = () => {
    if (this.state.query !== "") {
      this.setState({ isLoading: true });
      search(this.state.query).then(response => {
        this.setState({ isLoading: false }); //stops the loading animation
        this.props.setQuery(this.state.query); // returns the query to the callback function
        this.props.setData(response); // returns the collected data to the callback function
      });
    } else {
      // alerts the user if he/she entered nothing in the search bar
      Alert.warning("Oops, you didn't enter anything valid!");
    }
  };

  render() {
    // This is where the layout is rendered
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
                  onPressEnter={this.handleSubmit}
                />
              </FlexboxGrid.Item>
              <FlexboxGridItem colspan={2}>
                <Button
                  loading={this.state.isLoading}
                  color="cyan"
                  size="lg"
                  appearance="primary"
                  style={{ marginLeft: 6 }}
                  onClick={this.handleSubmit}
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
