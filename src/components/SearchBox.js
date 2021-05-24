import React from 'react';

const SearchBox = (props) => {
    const {searchChange} = props;
    return(
        <div classNam='pa2' >
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;