import React, { useState } from "react";
function SearchFilter() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];
  const [filterList, setFilterList] = useState(list);
  const handleSearch = (event) => {
    const value=event.target.value.trim();
    if (value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter((item) =>item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
    </div>
  );
}
export default SearchFilter;
