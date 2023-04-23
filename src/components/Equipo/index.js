import "./Equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

  //Destructuración
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  //Manera de declarar estilo #1
  const estiloTitulo = { borderColor: colorPrimario };

  return <>{
    colaboradores.length > 0 &&
    < section className="Equipo"

      //Manera de declarar título #2
      style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }
      }>

      <input
        type="color"
        className="input-color"
        value={colorPrimario}
        onChange={(event) => {
          actualizarColor(event.target.value, id)
        }}
      />
      <h3
        style={estiloTitulo}>{titulo}
      </h3>

      <div className="colaboradores">
        {
          colaboradores.map((colaborador, index) =>
            <Colaborador datos={colaborador}
              key={index}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              like={like}
            />)
        }
      </div>

    </section >
  }
  </>
}

export default Equipo;