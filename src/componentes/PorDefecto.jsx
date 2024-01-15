// import React, { useState } from 'react';

// function PorDefecto({ initialValues = { nombre: '', descripcion: '' }, onSubmit }) {
//   const [formValues, setFormValues] = useState(initialValues);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formValues);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="nombre">Nombre:</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={formValues.nombre}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="descripcion">Descripción:</label>
//         <textarea
//           id="descripcion"
//           name="descripcion"
//           value={formValues.descripcion}
//           onChange={handleChange}
//         ></textarea>
//       </div>
//       <button type="submit">Enviar</button>
//     </form>
//   );
// }

// export default PorDefecto;
