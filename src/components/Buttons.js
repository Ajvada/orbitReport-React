import React from 'react';
import satData from './satData'; 
import '../App';
import './styling.css'
const Buttons = (props) => {
  console.log('Display', props.displaySats)

  return (
    <div className='flex-container'>
      {props.displaySats.map((sat, id ) => {
      
        
        return(
        <button onClick={() => props.filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
        );
        })}

      
      <button onClick={() => props.setSat(satData)}>All Orbits</button>
    </div>
  )
};

export default Buttons;




























// const Buttons = () => {
//   return (
//     <div>
//       <button>Placeholder Button</button>
//       <button>All Orbits</button>
//       </div>
//   );
// };

// export default Buttons;