import React from 'react';

import 'rsuite/dist/styles/rsuite.min.css';
import './assets/css/global.css';

import SearchView from './views/SearchView';
import ProductListView from './views/ProductListView';

function App() {
  return (
    <div>
      {/* <SearchView /> */}
      <ProductListView/>

    </div>
  );
}

export default App;
