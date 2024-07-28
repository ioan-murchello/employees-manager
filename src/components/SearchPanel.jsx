
const SearchPanel = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      type='text'
      className='w-full rounded-md px-6 py-2'
      placeholder='Find an employee'
      onChange={(e) => handleSearch(e)}
      defaultValue={''}
    />
  );
};

export default SearchPanel;
