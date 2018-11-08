import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import Publications from './Publications';
import Footer from './Footer';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core';
import { faVideo, faFilePdf, faEnvelope, faHome, faMapMarkerAlt, faChalkboardTeacher, faSchool, faBuilding} from '@fortawesome/free-solid-svg-icons';
import { fab, faWeixin, faGithub, faFacebook, faTwitter, faWeibo } from '@fortawesome/free-brands-svg-icons'
import Redirect from 'react-router-dom/Redirect';
library.add(faFilePdf, faVideo, faEnvelope, faHome, faMapMarkerAlt, faChalkboardTeacher, faSchool, faBuilding);
library.add(fab, faWeixin, faGithub, faFacebook, faTwitter, faWeibo);


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <main id="main" className="pb-5">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/publications" component={Publications} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/home" />
          </Switch>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
