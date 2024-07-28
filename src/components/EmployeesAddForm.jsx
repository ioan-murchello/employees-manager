import { useState } from 'react'; 

const EmployeesAddForm = ({ addNewEmployyes, listLength }) => {
  const [newEmployees, setNewEmployees] = useState({
    name: '',
    salary: '',
    id: (listLength += 1),
    isIncreace: false,
  });

  const handleInputs = (e) => {
    if (e.target.value.trim() === '' || e.target.value.trim().length === 0) {
      return;
    }
    const name = e.target.name;
    const value = e.target.value;

    setNewEmployees((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onAddToList = (e) => {
    e.preventDefault();

    if (newEmployees.name === '' || newEmployees.salary === '') {
      return;
    }

    addNewEmployyes(newEmployees);

    const form = e.target.closest('form');

    if (form) {
      form.reset();
    }

    setNewEmployees({
      name: '',
      salary: '',
      id: listLength + 1,
      isIncreace: false,
    });
  };

  return (
    <div className='bg-[var(--bg)] p-6'>
      <h3 className='text-2xl text-white'>Add a new employee</h3>
      <form className='flex flex-col sm:flex-row gap-4 mt-2'>
        <input
          type='text'
          className='rounded-sm p-1 sm:p-2'
          placeholder="What's his(she) name?"
          name='name'
          onChange={handleInputs}
        />
        <input
          type='number'
          className='rounded-sm p-1 sm:p-2'
          placeholder='Sallary in $?'
          name='salary'
          onChange={handleInputs}
        />

        <button
          onClick={(e) => onAddToList(e)}
          type='submit'
          className='bg-white py-2 px-5 rounded-md'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
