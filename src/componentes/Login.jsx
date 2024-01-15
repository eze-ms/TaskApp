// import React, { useState } from 'react';
// import './Login.css';
// import { Button, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Importa useHistory
// import { useAuth } from './AuthContext'; // Importa el hook useAuth

// function Login() {
//   const [nombre, setNombre] = useState('Ezequiel');
//   const [password, setPassword] = useState('123');
//   const [nombreError, setNombreError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const navigate = useNavigate(); // Obtiene la instancia de useHistory

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'nombre') {
//       setNombre(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   }

//   const validateForm = () => {
//     let errores = false;

//     if (!nombre) {
//       setNombreError('El campo no puede estar vacío');
//       errores = true;
//     } else {
//       setNombreError('');
//     }

//     if (!password) {
//       setPasswordError('El campo no puede estar vacío');
//       errores = true;
//     } else {
//       setPasswordError('');
//       // Elimina la validación de caracteres especiales, mayúsculas, minúsculas, etc.
//       // Simplemente verifica si la contraseña tiene al menos 3 caracteres.
//       if (password.length < 3) {
//         setPasswordError('La contraseña debe tener al menos 3 caracteres');
//         errores = true;
//       }
//     }
//     return !errores;
//   }

//   const { isLoggedIn, setLoggedIn } = useAuth();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       setLoggedIn(true);
//       console.log('Formulario enviado con éxito' + isLoggedIn);
//       navigate('/proyectos'); // Usa navigate como función
//     }
//   }

//   const handleReset = () => {
//     setNombre('');
//     setPassword('');
//     setNombreError('');
//     setPasswordError('');
//   }

//   return (
//     <div className='container-form'>
//         {<p>{isLoggedIn ? "1" : "2"}</p>}
//       <form className="custom-form" onSubmit={handleSubmit}>
//         <ul className="custom-list">
//           <li>
//             <TextField
//               label="Nombre"
//               variant="outlined"
//               id='name'
//               type="text"
//               name='nombre'
//               value={nombre}
//               required
//               onChange={handleChange}
//               error={nombreError !== ''}
//               helperText={nombreError}
//               className="my-custom-textfield"
//             />
//             <TextField
//               id='password'
//               label="Password"
//               variant="outlined"
//               type="password"
//               name='password'
//               value={password}
//               onChange={handleChange}
//               className='password'
//               required
//               error={passwordError !== ''}
//               helperText={passwordError}
//             />
//             <div className='box-button'>
//               <Button className="login" color='primary' variant='outlined' type="submit">Login</Button>
//               <Button className="reset" color='primary' variant='outlined' type="button" onClick={handleReset}>Reset</Button>
//             </div>
//           </li>
//         </ul>
//       </form>
//     </div>
//   );
// }

// export default Login;
