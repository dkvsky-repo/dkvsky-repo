import React from 'react';
import 'milligram';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Notificaciones from './pages/Notificaciones';
import PanelDeControl from './pages/PanelDeControl';
import Preferencias from './pages/Preferencias';
import Soporte from './pages/Soporte';
import Navegacion from './components/Navegacion';

export default function App() {
  return (
    <>
      <Router>
        <Navegacion />
        <Switch>
          <Route path="/notificaciones">
            <Notificaciones />
          </Route>
          <Route path="/paneldecontrol">
            <PanelDeControl />
          </Route>
          <Route path="/preferencias">
            <Preferencias />
          </Route>
          <Route path="/soporte">
            <Soporte />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
