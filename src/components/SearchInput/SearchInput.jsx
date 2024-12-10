import { useState } from "react";

export default function SearchInput(props) {
  // eslint-disable-next-line react/prop-types
  let { onSearch } = props;
  let [search, setSearch] = useState("");
  let onSearchHandler = () => {
    onSearch(search);
  };
  return (
    <>
      <div className="input-group mb-3 mt-5">
        <span className="input-group-text" id="addon-wrapping">
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <input
          type="text"
          className="form-control shadow bg-body"
          placeholder="Search by Name"
          aria-label="Search by Name"
          aria-describedby="button-addon2"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          onClick={onSearchHandler}
          className="btn btn-primary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </>
  );
}
