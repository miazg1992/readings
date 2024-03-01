import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import { menuStyles, comboboxStyles } from './Downshift.styles';

export const initialAvailableProducts = [
  {
    description: 'niby opis mleka',
    nameEN: 'milk',
    namePL: 'mleko',
    fdcId: '2340794',
  },
  {
    description: 'niby opis marchewka',
    nameEN: 'carrot, raw',
    namePL: 'marchew',
    fdcId: '2345173',
  },
  {
    description: 'niby opis mleka',
    nameEN: 'milk',
    namePL: 'siemię lniane',
    fdcId: '2339341',
  },
  {
    description: 'niby opis mleka',
    nameEN: 'milk',
    namePL: 'ziemniaki',
    fdcId: '2344879',
  },
  {
    description: 'niby opis chleb',
    nameEN: 'chleb',
    namePL: 'chleb bezglutenowy',
    fdcId: '174099',
  },
  {
    description: 'jabłko opis',
    nameEN: 'jabłko',
    namePL: 'jabłko',
    fdcId: '2124902',
  },
  {
    description: 'pomarańcz',
    nameEN: 'pomarańcz',
    namePL: 'pomarańcz',
    fdcId: '2344665',
  },
  {
    description: 'brokuł',
    nameEN: 'brokuł',
    namePL: 'brokuł',
    fdcId: '2345151',
  },
  {
    description: 'brokuł',
    nameEN: 'brokuł',
    namePL: 'słonecznik',
    fdcId: '2343060',
  },
  {
    description: 'brokuł',
    nameEN: 'brokuł',
    namePL: 'kapusta',
    fdcId: '2346373',
  },
  {
    description: 'brokuł',
    nameEN: 'brokuł',
    namePL: 'grzyby',
    fdcId: '2345313',
  },

  {
    description: 'brokuł',
    nameEN: 'brokuł',
    namePL: 'soczewica',
    fdcId: '2342898',
  },
  {
    description: 'brokuł',
    nameEN: 'brokuł',
    namePL: 'otręby',
    fdcId: '168872',
  },
  {
    description: 'brokuł',
    nameEN: 'brokuł',
    namePL: 'łosoś',
    fdcId: '2341705',
  },
  {
    description: 'brokuł',
    nameEN: 'brokuł',
    namePL: 'Witamina D',
    fdcId: '28825963',
  },
];

// import Downshift from 'downshift';

const items = [
  { value: 'apple', fdcId: '2341705' },
  { value: 'pear', fdcId: '2341705' },
  { value: 'orange', fdcId: '2341705' },
  { value: 'grape', fdcId: '2341705' },
  { value: 'banana', fdcId: '2341705' },
  { value: 'pomidor', fdcId: '2341705' },
];

const ComboBoxExample = () => {
  const books = [
    { id: 'book-1', name: 'pomarańcz' },
    { id: 'book-2', name: 'War and Peace' },
    { id: 'book-3', name: 'The Idiot' },
  ];
  function getBooksFilter(inputValue) {
    const lowerCasedInputValue = inputValue.toLowerCase();

    return function booksFilter(book) {
      console.log(inputValue);
      console.log('filtrowanie');
      return (
        !inputValue || book.name.toLowerCase().includes(lowerCasedInputValue)
      );
    };
  }

  function ComboBox() {
    const [items, setItems] = React.useState(books);
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
    } = useCombobox({
      onInputValueChange({ inputValue }) {
        setItems(books.filter(getBooksFilter(inputValue)));
      },
      items,
      itemToString(item) {
        return item ? item.name : '';
      },
    });

    return (
      <div>
        <div className="w-72 flex flex-col gap-1">
          <label className="w-fit" {...getLabelProps()}>
            Choose your favorite book:
          </label>
          <div className="flex shadow-sm bg-white gap-0.5">
            <input
              placeholder="Best book ever"
              className="w-full p-1.5"
              {...getInputProps()}
            />
            <button
              aria-label="toggle menu"
              className="px-2"
              type="button"
              {...getToggleButtonProps()}
            >
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </button>
          </div>
        </div>
        <ul
          className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${
            !(isOpen && items.length) && 'hidden'
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                // className={
                //   highlightedIndex === index && 'bg-blue-300',
                //   selectedItem === item && 'font-bold',
                //   'py-2 px-3 shadow-sm flex flex-col',
                // }
                key={item.id}
                {...getItemProps({ item, index })}
              >
                <span>{item.name}</span>
                {/* <span className="text-sm text-gray-700">{item.author}</span> */}
              </li>
            ))}
        </ul>
      </div>
    );
  }
  return <ComboBox />;
};

export default ComboBoxExample;
