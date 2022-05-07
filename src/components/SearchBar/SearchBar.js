import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../images/search-icon.svg";
import { Content, Wrapper } from "./SearchBar.styles";

const SearchBar = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState("");
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchValue(inputValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchValue, inputValue]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setInputValue(e.currentTarget.value)}
          value={inputValue}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
