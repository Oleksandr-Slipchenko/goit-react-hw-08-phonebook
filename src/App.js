import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppBar from './components/AppBar';
import { routes } from './routes';
import Loader from './components/Loader';
import Container from './components/Container';

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

const App = () => {
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
};

export default App;
