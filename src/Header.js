import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/styles.css';
import './css/opensans.css';
import Menu from './Menu';
  import meImage from './img/me.jpg';
import $ from 'jquery'; 


class Header extends Component {
  componentDidMount() {

    var initio_parallax_animation = function() { 
      $('.parallax').each( function(i, obj) {
        var speed = $(this).attr('parallax-speed');
        if( speed ) {
          var background_pos = '-' + (window.pageYOffset / speed) + "px";
          $(this).css( 'background-position', 'center ' + background_pos );
        }
      });
    }
    
    // and run it again every time you scroll
    window.addEventListener('scroll', initio_parallax_animation);
  }
  
  render() {
    return (
     
    <div>
      <div id="head" className="parallax" parallax-speed="4">
        <h1 id="logo" className="text-center">
          <img className="img-circle rounded-circle" src={meImage} alt=""/>
          <span className="title">Weinan Shi</span>
          <span className="tagline">Tsinghua University<br/>
            <a href="mailto:swn18@mails.tsinghua.edu.cn">swn18@mails.tsinghua.edu.cn</a>
          </span>
        </h1>
	    </div>
      <Menu></Menu>
    </div>
    

    );
  }
}

export default Header;
