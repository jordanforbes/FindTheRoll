import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const SearchSpells = (props) => {
  const [searchString, setSearchString] = useState("");
  //search function
  const handleChange = (e) => {
    e.preventDefault();
    // props.setSearch(e.target.value);
    setSearchString(e.target.value);
  };

  const goSearch = () => {
    console.log("EXECUTING SEARCH OF " + searchString);
    props.setSearch(searchString);
  };
  return (
    <>
      <input
        onChange={handleChange}
        type="search"
        id="form1"
        class="form-control"
      />
      <Button class="btn btn-primary" onClick={goSearch}>
        Search
      </Button>
    </>
  );
};
export default SearchSpells;
