const Filter = ({ filterText, handleFilterText }) => (
  <div>
    filter shown with <input value={filterText} onChange={handleFilterText} />
  </div>
);

export default Filter;
