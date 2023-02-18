// import React, { useContext } from "react";
// import { Context as cooksContext} from "../context/pageContext";

const Search: React.FC = () => {
  // const { filterBySearch } = useContext(cooksContext);

  return (
    <div className="Search mt-5">
      <input
        type="text"
        className="form-control"
        // onKeyUp={e => filterBySearch(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
