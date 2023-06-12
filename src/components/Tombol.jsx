import './Albums.css'

const Tombol = (props) => {
    const condition1 = {
    backgroundColor: props.color,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontFamily: "monospace",
    fontWeight: "bold",
    cursor: "pointer",
  };

   return <button onClick={props.handleClick} style={condition1}>
      {props.teks}</button>;
}

export default Tombol


