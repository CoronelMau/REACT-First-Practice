import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      nombre: 'Mau',
      puesto: 'Programador',
      foto: 'https://github.com/coronelmau.png',
      equipo: 'Programación',
      fav: false,
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: 'Programación',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9',
    },
    {
      id: uuidv4(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF',
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2',
    },
    {
      id: uuidv4(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8',
    },
    {
      id: uuidv4(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5',
    },
    {
      id: uuidv4(),
      titulo: 'Móvil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9',
    },
    {
      id: uuidv4(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF',
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log('Registrar Colaborado:', colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar Coolaborador
  const eliminarCoolaborador = (id) => {
    console.log('Eliminar: ', id);
    const nuevoColaborador = colaboradores.filter((colaborador) => {
      return colaborador.id !== id;
    });
    actualizarColaboradores(nuevoColaborador);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    // console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
  };

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      {/* Mandar a llamar al Header */}
      {/* {Header()}
      <Header></Header> */}
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarCoolaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
