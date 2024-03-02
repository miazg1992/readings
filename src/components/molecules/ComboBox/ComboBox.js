import React from 'react';
import { useCombobox } from 'downshift';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import {
  SearchResults,
  SearchResultsItem,
  SearchWrapper,
} from './ComboBox.styles';

const ComboBox = ({ availableProducts, getInputValue }) => {
  const [items, setItems] = React.useState([]);

  const getMatchingProducts = (inputValue = '') => {
    if (inputValue) {
      console.log(availableProducts, 'avPr');
      const lowerCasedInputValue = inputValue.toLowerCase();
      const matchingProducts = availableProducts.filter((product) =>
        product.namePL.toLowerCase().includes(lowerCasedInputValue),
      );
      setItems(matchingProducts);
      console.log(matchingProducts, 'matching');
      return matchingProducts;
    } else return [];
  };

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
      setItems(getMatchingProducts(inputValue));
      console.log(inputValue, 'inputValue');
      getInputValue(inputValue);
    },
    items,
    itemToString(item) {
      return item ? item.namePL : '';
    },
  });

  return (
    <SearchWrapper>
      <div>
        <Label {...getLabelProps()}>Nazwa produktu:</Label>

        <Input {...getInputProps()} />
      </div>
      <SearchResults isvisible={isOpen && items.length > 0} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <SearchResultsItem
              ishighlighted={highlightedIndex === index}
              key={item.id}
              {...getItemProps({ item, index })}
            >
              {console.log(highlightedIndex)}
              {item.namePL}
            </SearchResultsItem>
          ))}
      </SearchResults>
    </SearchWrapper>
  );
};

export default ComboBox;
