import "./Campo.css"

const Campo = (props) => {

  const placeholderMod = `${props.placeholder}...`;

  const { type = "text" } = props;

  // console.log(type);

  const manejarCambio = (e) => {

    props.actualizarValor(e.target.value);
  }

  return <div className={`campo campo-${type}`}>
    <label>{props.title}</label>
    <input
      placeholder={placeholderMod}
      required={props.required}
      value={props.valor}
      onChange={manejarCambio}
      type={type}
    />
  </div >;
}

export default Campo;