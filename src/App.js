import React from "react";

import "rsuite/dist/styles/rsuite.min.css";
import "./assets/css/global.css";

import SearchView from "./views/SearchView";
import ProductListView from "./views/ProductListView";

class App extends React.Component {
  constructor(props) {
    super(props);

    // collects data retured from the SearchView to be passed on to the ProductListView
    // Also stores the current state through isReady
    this.state = { query: "", data: [], isReady: false };
  }

  // Callback passed to searchView to set query and data
  setQuery = query => {
    this.setState({ query: query });
  };

  setData = data => {
    this.setState({ data: data, isReady: true });
  };

  render() {
    return (
      <div>
      {/* Chooses either the searchView or ProductListView depending on the current state */}
        {(!this.state.isReady)? (
          <SearchView setQuery={this.setQuery} setData={this.setData} />
        ) : (
          <ProductListView data={this.state.data} query={this.state.query}/>
        )}
      </div>
    );
  }
}

export default App;
