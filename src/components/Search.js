import React from "react";

const Search = ({ handleInput, search }) => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie.. "
        onChange={handleInput}
        className="searchbox"
        onKeyPress={search}
      />
    </section>
  );
};

export default Search;
