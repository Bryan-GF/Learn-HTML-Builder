import React, {Component} from 'react';
import Toolbox from './Toolbox';
import HTMLDisplay from './HTMLDisplay';
import WebpageDisplay from './WebpageDisplay';

class MainUserInterface extends Component {

  render() {
    return (
      <div className="MainUserInterface-Container">
          <Toolbox/>
          <HTMLDisplay/>
          <WebpageDisplay/>
      </div>
    );
  }
}

export default MainUserInterface;