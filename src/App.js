import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AppBar from './components/AppBar';
import { routes } from './routes';
import Loader from './components/Loader';
import Container from './components/Container';
import { authOperations } from './redux/auth';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.js' /* webpackChunkName: "HomeView" */),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView.js' /* webpackChunkName: "RegisterView" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView.js' /* webpackChunkName: "LoginView" */),
);

const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView.js' /* webpackChunkName: "ContactsView" */
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route exact path={routes.register} component={RegisterView} />
            <Route path={routes.login} component={LoginView} />
            <Route path={routes.contacts} component={ContactsView} />
            <Route component={HomeView} />
          </Switch>
        </Suspense>
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

// const App = () => {
//   return (
//     <Container>
//       <AppBar />

//       <Suspense fallback={<Loader />}>
//         <Switch>
//           <Route exact path={routes.home} component={HomeView} />
//           <Route exact path={routes.register} component={RegisterView} />
//           <Route path={routes.login} component={LoginView} />
//           <Route path={routes.contacts} component={ContactsView} />
//           <Route component={HomeView} />
//         </Switch>
//       </Suspense>
//       <ToastContainer autoClose={3000} />
//     </Container>
//   );
// };

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
