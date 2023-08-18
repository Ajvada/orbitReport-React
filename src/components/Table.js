import React from 'react';
import './styling.css'
const Table = ({ sat }) => { 
  console.log(sat.map)
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map(({ id, name, type, launchDate, operational }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{type}</td>
            <td>{launchDate}</td>
            <td>{operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;


































// const Table = ({ sat }) => {
//   return (
//       <table>
//        <thead>
//         <tr>
//           <th>Header TBD</th> 
//           <th> </th> 
//           <th> </th> 
//           <th> </th> 
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//           <td>Row Data TBD</td>
//         </tr>
//         </tbody>
//       </table>
//   );
// };

// export default Table;