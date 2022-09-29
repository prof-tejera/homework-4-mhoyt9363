//------------------------------------------
// A number has been clicked, determine 
// how we want to display it and then pass it 
// to the parent.
//------------------------------------------
import  styled, {keyframes} from 'styled-components';

// const Number = ({ style={}, value, onClick }) => {
//   const defaultStyle = {
//     padding: 10,
//     border: "1px solid black",
//     width: 60,
//     textAlign: "center",
//     backgroundColor: "lightblue",
//   }

//   return (
//     <div onClick={() => onClick(value)}
//       style={{...defaultStyle, ...style}}
//     >
//       {value}
//     </div>
//   );
// };
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Number = styled.div`
    padding: 10px;
    border: 1px solid black;
    width: 60px;
    text-align: center;
    animation: ${rotation} 1s linear 0s 5;
    background-color: ${props => { if(props.type === 'even') return('lightblue');
                                  return('lightgreen');
                                  }
                      }
`;

export default Number;