import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';

import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Cases from 'containers/pages/Cases';

function App() {
  return (
    <Provider store={store}>

      <Router>
          <Routes>
            {/*Error Display */}
            <Route path="*" element={<Error404/>}/>
            
            {/*Home Display */}
            <Route path="/" element={<Home />}/>
            <Route path="/casos" element={<Cases/>}/>
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
