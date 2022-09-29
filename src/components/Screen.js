//------------------------------------------
// Here is where the user information
// will be displayed. The color and
// style will be updated as appropriate.
//------------------------------------------

const Screen = ({ updateStyle={}, value}) => {
  const defaultStyle = {
    border: "1px solid black",
    width: 300,
    height: 70,
    textAlign: "right",
    marginBottom: 10,
    backgroundColor: "lightgrey",
  }

  return (
    <div
      style={{...defaultStyle, ...updateStyle}}
    >
      {value}
    </div>
  );
};

export default Screen;
