import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async'; // Importa HelmetProvider
import store from './store';

import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Cases from 'containers/pages/Cases';
import Services from 'containers/pages/Services';
import About from 'containers/pages/About';
import Careers from 'containers/pages/Careers'; // Asegúrate de tener el componente Careers

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider> {/* Envuelve tu aplicación con HelmetProvider */}
        <Router>
          <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404 />} />
            
            {/* Home Display */}
            <Route path="/" element={<Home />} />
            <Route path="/casos" element={<Cases />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/carreras" element={<Careers />} /> {/* Agregue el componente Careers */}
          </Routes>
        </Router>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
