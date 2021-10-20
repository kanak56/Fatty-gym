
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import LogIn from './Pages/LogIn/LogIn';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Registration from './Pages/Registration/Registration';

import ServicesDetails from './Pages/Services/SeviceDetails/ServicesDetails';

import Gallerys from './Pages/Gallerys/Gallerys';
import Equipments from './Pages/Equipments/Equipments';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/services/:description/:name'>
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <Route exact path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route exact path='/gallery'>
              <Gallerys></Gallerys>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='/equipments'>
              <Equipments></Equipments>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
