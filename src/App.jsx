import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Menu from './componentes/Menu';
import NoEncontrada from './componentes/NoEncontrada';
import Proyectos from './componentes/Proyectos';
import Inicio from './componentes/Inicio';
// import Login from './componentes/Login';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: false, // Inicializado en false
  //   };
  // }

  // setLoggedIn = () => {
  //   this.setState({ isLoggedIn: true }, () => {
  //     console.log('Formulario enviado con éxito', this.state.isLoggedIn);
  //     this.props.history.push('/'); // Redirige al usuario a la página de inicio después de iniciar sesión
  //   });
  // }

  render() {
    // const { isLoggedIn } = this.state;

    return (
      <div className="App">
        <Header />
        {/* {<p>{isLoggedIn ? "a" : "b"}</p>} */}
        <main className='App-main'>
          {/* {isLoggedIn ? ( */}
            <>
              <Menu />
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="*" element={<NoEncontrada />} />
              </Routes>
            </>
          {/* ) : ( */}
            {/* // Si isLoggedIn es false, muestra el formulario de inicio de sesión */}
            {/* <Login setLoggedIn={this.setLoggedIn} /> */}
          {/* )} */}
        </main>
      </div>
    );
  }
}

export default App;
