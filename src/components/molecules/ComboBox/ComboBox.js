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
  const [items, setItems] = React.useState(availableProducts);

  const getMatchingProducts = (inputValue = '') => {
    if (inputValue) {
      console.log(availableProducts, 'avPr');
      const lowerCasedInputValue = inputValue.toLowerCase();
      const matchingProducts = availableProducts.filter((product) =>
        product.namePL.toLowerCase().includes(lowerCasedInputValue),
      );
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
      <div className="w-72 flex flex-col gap-1">
        <Label className="w-fit" {...getLabelProps()}>
          Nazwa produktu:
        </Label>
        <div className="flex shadow-sm bg-white gap-0.5">
          <Input placeholder="Wprowadź produkt" {...getInputProps()} />
        </div>
      </div>
      <SearchResults
        isVisible={isOpen}
        highlighted={highlightedIndex}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <SearchResultsItem
              className={'py-2 px-3 shadow-sm flex flex-col'}
              key={item.id}
              {...getItemProps({ item, index })}
            >
              <span>{item.namePL}</span>
            </SearchResultsItem>
          ))}
      </SearchResults>
    </SearchWrapper>
  );
};

export default ComboBox;
