import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/layout/Landing';
import Navigationbar from './components/layout/Navigationbar';
import AlertBar from './components/layout/AlertBar';
import PageNotFound from './components/layout/PageNotFound';



const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navigationbar />
        <AlertBar />
        <section className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)

export default App;
