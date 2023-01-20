import React from 'react';
import {useEffect} from 'react';
import Home from '../../pages/Home';
import Layout from '../../pages/Layout';
import Details from '../../pages/Details';
import NoPage from '../../pages/NoPage';
import {getResourcePath} from '../../utils/utilities';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {createScripts, loadScriptsSequential, removeScripts} from '../../utils/script_loader';

const App = (props) => {
  useEffect(() => {
    const scriptUrls = [
      'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js',
      '/static/js/jquery-3.6.0.min.js',
      '/static/js/main.js'
    ];
    var scripts = createScripts(scriptUrls, "app");
    loadScriptsSequential(scripts);
    return function () {return removeScripts(scripts)};
  }, []);
  return (
    <div id="app">
      <Router basename={getResourcePath()}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home config={props.config}/>} />
            <Route path="/project/:id" element={<Details config={props.config}/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
