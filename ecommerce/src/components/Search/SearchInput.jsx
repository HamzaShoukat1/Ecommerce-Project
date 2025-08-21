// components/Search/SearchInput.jsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchSearchProducts,
  setQuery,
  clearResults,
} from "../../Store/Searchslice/SearchSlice";
import Input from "./Input";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      const value = inputValue;
      if (value.length > 0) {
        dispatch(setQuery(value));
        dispatch(fetchSearchProducts(value));
      } else {
        dispatch(clearResults());
      }
    }, 600);

    return () => clearTimeout(delay);
  }, [inputValue, dispatch]);



  return (
    <Input
      placeholder="Search for Products,Brands and More"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default SearchInput;
