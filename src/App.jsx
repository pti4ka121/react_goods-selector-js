import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

// export const App = () => (
//   <main className="section container">
//     <h1 className="title is-flex is-align-items-center">No goods selected</h1>

//     <h1 className="title is-flex is-align-items-center">
//       Jam is selected
//       <button data-cy="ClearButton" type="button" className="delete ml-3" />
//     </h1>

//     <table className="table">
//       <tbody>
//         <tr data-cy="Good">
//           <td>
//             <button data-cy="AddButton" type="button" className="button">
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Dumplings
//           </td>
//         </tr>

//         <tr data-cy="Good" className="has-background-success-light">
//           <td>
//             <button
//               data-cy="RemoveButton"
//               type="button"
//               className="button is-info"
//             >
//               -
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Jam
//           </td>
//         </tr>

//         <tr data-cy="Good">
//           <td>
//             <button data-cy="AddButton" type="button" className="button">
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Garlic
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </main>
// );

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleSelectGood = good => {
    setSelectedGood(good);
  };

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGood !== good && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleSelectGood(good)}
                  >
                    +
                  </button>
                )}
                {selectedGood === good && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => handleClearSelection()}
                  >
                    -
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
