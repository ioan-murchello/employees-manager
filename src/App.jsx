import AppInfo from './components/AppInfo';
import SearchPanel from './components/SearchPanel';
import AppFilter from './components/ApFilter';
import EmployeesList from './components/EmployeesList';
import EmployeesAddForm from './components/EmployeesAddForm';

// import './app.css';
import { useState } from 'react';

const workers = [
  {
    isIncreace: false,
    id: 1,
    name: 'Alice Johnson',
    salary: 5500,
  },
  { isIncreace: true, id: 2, name: 'Bob Smith', salary: 2200 },
  {
    isIncreace: false,
    id: 3,
    name: 'Charlie Brown',
    salary: 4800,
  },
  {
    isIncreace: false,
    id: 4,
    name: 'David Wilson',
    salary: 3100,
  },
  { isIncreace: false, id: 5, name: 'Eve Davis', salary: 2900 },
  {
    isIncreace: false,
    id: 6,
    name: 'Frank Moore',
    salary: 1400,
  },
  {
    isIncreace: true,
    id: 7,
    name: 'Grace Taylor',
    salary: 2400,
  },
  {
    isIncreace: false,
    id: 8,
    name: 'Hannah White',
    salary: 1600,
  },
  { isIncreace: true, id: 9, name: 'Ivy Harris', salary: 4700 },
  {
    isIncreace: false,
    id: 10,
    name: 'Jack Thomas',
    salary: 1500,
  },
  {
    isIncreace: false,
    id: 11,
    name: 'Karen Lee',
    salary: 2800,
  },
  {
    isIncreace: false,
    id: 12,
    name: 'Leo Walker',
    salary: 2100,
  },
  { isIncreace: true, id: 13, name: 'Mia Hall', salary: 3600 },
  {
    isIncreace: false,
    id: 14,
    name: 'Noah King',
    salary: 1800,
  },
  {
    isIncreace: true,
    id: 15,
    name: 'Olivia Scott',
    salary: 2300,
  },
  {
    isIncreace: false,
    id: 16,
    name: 'Paul Green',
    salary: 5000,
  },
  {
    isIncreace: false,
    id: 17,
    name: 'Quinn Adams',
    salary: 1400,
  },
  {
    isIncreace: false,
    id: 18,
    name: 'Ruby Baker',
    salary: 2500,
  },
  {
    isIncreace: false,
    id: 19,
    name: 'Sam Carter',
    salary: 1900,
  },
  {
    isIncreace: false,
    id: 20,
    name: 'Tina Perez',
    salary: 3600,
  },
  {
    isIncreace: false,
    id: 21,
    name: 'Tim Skotch',
    salary: 3450,
  },
];

function App() {
  const [employeesList, setEmployees] = useState(workers);
  const [filterWord, setFilterWord] = useState('all');
  const [search, setSearch] = useState('');

  const removeEmployees = (id) => {
    const updatedEmployeesList = employeesList.filter((el) => el.id !== id);
    setEmployees(updatedEmployeesList);
  };

  const onIncreace = (id) => {
    const updatedEmployees = employeesList.map((el) => {
      return el.id === id ? { ...el, isIncreace: !el.isIncreace } : el;
    });
    setEmployees(updatedEmployees);
  };

  const filteredEmployees = (filter, list) => {
    const copied = [...list];

    if (filter === 'promotion') {
      const employeesWithIncreace = copied.filter(
        (el) => el.isIncreace === true
      );
      return employeesWithIncreace;
    } else if (filter === 'salary') {
      const salaryMoreThanFiveThousand = copied.filter(
        (el) => el.salary > 2000
      );
      return salaryMoreThanFiveThousand;
    } else if (filter === 'all') {
      return list;
    }
  };

  const searchEmployees = (str, list) => {
    if (str.length === 0) {
      return list;
    }

    const lowerCaseStr = str.toLowerCase();
    return list.filter((el) => el.name[0].toLowerCase().includes(lowerCaseStr));
  };

  const addNewEmployyes = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const filteredList = filteredEmployees(filterWord, employeesList);
  const searchedList = searchEmployees(search, filteredList);

  return (
    <div className='container mx-auto flex flex-col gap-y-5'>
      <AppInfo total={employeesList} />

      <div className='rounded-md flex flex-col gap-y-2 p-6 bg-[var(--bg)]'>
        <SearchPanel setSearch={setSearch} listToSearch={employeesList} />
        <AppFilter setFilterWord={setFilterWord} />
      </div>

      <EmployeesList
        list={searchedList}
        deleteEmployees={removeEmployees}
        onIncreace={onIncreace}
        onFilter={filteredEmployees}
        filterWord={filterWord}
      />
      <EmployeesAddForm
        addNewEmployyes={addNewEmployyes}
        listLength={searchedList.length}
      />
    </div>
  );
}

export default App;
