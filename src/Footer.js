import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <footer id="underfooter">
	<div className="container">
		<div className="row">
			

			<div className="col-md-12 widget">
				<div className="widget-body">
					<p className="text-center">
						Copyright &copy; {(new Date()).getFullYear()}, <a href="http://www.shiweinan.com">Weinan Shi</a><br/> 
					</p>	
				</div>
			</div>

		</div>
	</div>
</footer>
    );
  }
}

export default App;
