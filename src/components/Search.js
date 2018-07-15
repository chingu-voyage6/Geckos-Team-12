import React from 'react';
import Downshift from 'downshift';
import { Dropdown, DropdownMenu, DropdownItem} from 'mdbreact';
import '../styles/nav.css';

const items = [
    { value: 'apple' },
    { value: 'pear' },
    { value: 'orange' },
    { value: 'grape' },
    { value: 'banana' },
]

const Search = () => {

    return (
        <Downshift
            onChange={selection => alert(`You selected ${selection.value}`)}
            itemToString={item => (item ? item.value : '')}
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
            }) => (
                    <div className="searchBox">
                        
                        <input
                            {...getInputProps({
                                isOpen,
                                placeholder: 'Type a or e for testing'
                            })}
                            className="form-control"
                        />

                        {isOpen ? (
                            <div className="searchStyle">
                                {items.filter(
                                    item =>
                                        !inputValue ||
                                        item.value.toLowerCase().includes(inputValue.toLowerCase())
                                )
                                .map((item,index)=>(
                                    
                                    <DropdownItem
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
                                    </DropdownItem>
                                    
                                ))
                            }
                            </div>    
                        ) : null }  

                    </div>
                )}
        </Downshift>
    )
}

export default Search;

