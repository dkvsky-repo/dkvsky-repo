import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/notificaciones">Notificaciones</Link>
        </li>
        <li>
          <Link to="/paneldecontrol">Panel De Control</Link>
        </li>
        <li>
          <Link to="/preferencias">Preferencias</Link>
        </li>
        <li>
          <Link to="/soporte">Soporte</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
