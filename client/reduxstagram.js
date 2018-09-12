// let's go!
import React from 'react';
import { render } from 'react-dom';

//import CSS
import css from './styles/style.styl';
//import components
import Main from './components/Main';
import App from './components/App'
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';


//import react router  dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';//provider connect react with reducx
import store, { history } from './store';



const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));