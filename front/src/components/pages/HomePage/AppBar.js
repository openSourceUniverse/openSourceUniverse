import React, { Component } from 'react'
import {Button, IconButton} from 'react-toolbox/lib/button'

const TestButtons = () => (
  <div>
    <Button icon='bookmark' label='Bookmark' accent />
  </div>
);

class AppBar extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App Bar</h2>
        </div>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
        <TestButtons/>
      </div>
    );
  }
}

export default AppBar
