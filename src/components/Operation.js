//------------------------------------------
// An operation has been clicked, determine 
// how we want to display it and pass it back
// to the parent.
//------------------------------------------

const Operation = ({ style={}, value, onClick }) => {
  const defaultStyle = {
    padding: 10,
    border: "1px solid black",
    width: 60,
    textAlign: "center",
    backgroundColor: "lightcoral",
  }
  return (
    <div onClick={() => onClick(value)}
      style={{...defaultStyle, ...style}}
    >
      {value}
    </div>
  );
};

export default Operation;
