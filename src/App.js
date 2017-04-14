import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PostIndex} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
        </div>
      </Router>
    );
  }
}

export default App;
