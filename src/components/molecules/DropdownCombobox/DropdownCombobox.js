import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import { menuStyles, comboboxStyles } from './DropdownCombobox.styles';

// const items = [
//   {
//     description: 'niby opis mleka',
//     nameEN: 'milk',
//     namePL: 'mleko',
//     fdcId: '2340794',
//   },
//   {
//     description: 'niby opis marchewka',
//     nameEN: 'carrot, raw',
//     namePL: 'marchew',
//     fdcId: '2345173',
//   },
//   {
//     description: 'niby opis mleka',
//     nameEN: 'milk',
//     namePL: 'siemię lniane',
//     fdcId: '2339341',
//   },
//   {
//     description: 'niby opis mleka',
//     nameEN: 'milk',
//     namePL: 'ziemniaki',
//     fdcId: '2344879',
//   },
//   {
//     description: 'niby opis chleb',
//     nameEN: 'chleb',
//     namePL: 'chleb bezglutenowy',
//     fdcId: '174099',
//   },
//   {
//     description: 'jabłko opis',
//     nameEN: 'jabłko',
//     namePL: 'jabłko',
//     fdcId: '2124902',
//   },
//   {
//     description: 'pomarańcz',
//     nameEN: 'pomarańcz',
//     namePL: 'pomarańcz',
//     fdcId: '2344665',
//   },
//   {
//     description: 'brokuł',
//     nameEN: 'brokuł',
//     namePL: 'brokuł',
//     fdcId: '2345151',
//   },
//   {
//     description: 'brokuł',
//     nameEN: 'brokuł',
//     namePL: 'słonecznik',
//     fdcId: '2343060',
//   },
//   {
//     description: 'brokuł',
//     nameEN: 'brokuł',
//     namePL: 'kapusta',
//     fdcId: '2346373',
//   },
//   {
//     description: 'brokuł',
//     nameEN: 'brokuł',
//     namePL: 'grzyby',
//     fdcId: '2345313',
//   },

//   {
//     description: 'brokuł',
//     nameEN: 'brokuł',
//     namePL: 'soczewica',
//     fdcId: '2342898',
//   },
//   {
//     description: 'brokuł',
//     nameEN: 'brokuł',
//     namePL: 'otręby',
//     fdcId: '168872',
//   },
//   {
//     description: 'brokuł',
//     nameEN: 'brokuł',
//     namePL: 'łosoś',
//     fdcId: '2341705',
//   },
//   {
//     description: 'brokuł',
//     nameEN: 'brokuł',
//     namePL: 'Witamina D',
//     fdcId: '28825963',
//   },
// ];

import Downshift from 'downshift';

const items = [
  { namePl: 'apple', fdcId: '2341705' },
  { namePl: 'pear', fdcId: '2341705' },
  { namePl: 'orange', fdcId: '2341705' },
  { namePl: 'grape', fdcId: '2341705' },
  { namePl: 'banana', fdcId: '2341705' },
  { namePl: 'pomidor', fdcId: '2341705' },
];

export const DropdownCombobox = () => {
  return (
    <Downshift
      onChange={(selection) =>
        alert(
          selection ? `You selected ${selection.value}` : 'Selection Cleared',
        )
      }
      itemToString={(item) => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <div>
          <label {...getLabelProps()}>Wprowadź nazwę produktu</label>
          <div
            style={{ display: 'inline-block' }}
            {...getRootProps({}, { suppressRefError: true })}
          >
            <input {...getInputProps()} />
          </div>
          <ul {...getMenuProps()}>
            {isOpen
              ? items
                  .filter(
                    (item) => !inputValue || item.value.includes(inputValue),
                  )
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.value}
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
};

export default DropdownCombobox;
