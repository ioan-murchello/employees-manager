import { useEffect, useState } from 'react';
import EmployeesListItem from './EmployeesListItem';
 

const EmployeesList = ({
  list,
  deleteEmployees,
  onIncreace,
  onFilter,
  filterWord,
}) => {
  const [newList, setNewList] = useState(list);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(false);
    }, newList.length * 100);
  }, []);

  useEffect(() => {
    const arr = onFilter(filterWord, list);
    setNewList(arr);
  }, [filterWord, list, onFilter]);

  return (
    <ul className='rounded-md border p-6 overflow-hidden flex flex-col gap-y-4'>
      {newList && newList.length > 0 ? (
        newList.map((el, index) => {
          return (
            <EmployeesListItem
              key={el.id}
              onDelete={deleteEmployees}
              onIncreace={onIncreace}
              initialLoad={initialLoad}
              index={index}
              {...el}
            />
          );
        })
      ) : (
        <div className='empty-list'>
          there are no employees corresponding to this category
        </div>
      )}
    </ul>
  );
};

export default EmployeesList;
