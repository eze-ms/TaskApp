import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Switch from '@mui/material/Switch';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDaytime: true,
    };
  }

  // Función para alternar entre día y noche
  toggleDayNightMode = () => {
    this.setState((prevState) => ({
      isDaytime: !prevState.isDaytime,
    }));
  }

  render() {
    const { isDaytime } = this.state || {};
    const backgroundClass = isDaytime ? 'App-light' : 'App-dark';

    return (
      <header>
        <div className='box-header'>
          <div className="left-content">
              <div className="logo">
                
                <Link to="/">
                  <img src="./assets/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="welcome-message">Bienvenido, Ezequiel</div>
          </div>
          <div className="right-content">
          <Switch
                checked={isDaytime}
                onChange={this.toggleDayNightMode}
                color="primary"
                name="dayNightSwitch"
                inputProps={{ 'aria-label': 'day night switch' }}
              />
            <div className={`header-container ${backgroundClass}`}>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
