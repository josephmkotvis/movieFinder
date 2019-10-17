import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/layout/Landing';


const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* For 404 Not Found */}
          {/* <Route exact path="*" component={} /> */}
        </Switch>
      </Fragment>
    </Router>

  </Provider>
)

export default App;
