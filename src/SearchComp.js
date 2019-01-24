import React from 'react'

const SearchComp = (props) => <input type='text' onChange={props.onChangeHandler}>{props.searchQuery}</input>

export default SearchComp