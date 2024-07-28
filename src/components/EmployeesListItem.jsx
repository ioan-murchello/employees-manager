 
import 'animate.css';
import '../index.css'
import { salaryFormatter } from '../helpers';
import { useState } from 'react';
import cookie from '../assets/cookie.svg'
import star from '../assets/star.svg'
import truck from '../assets/truck.svg'

const EmployeesListItem = ({
  name,
  id,
  isIncreace,
  salary,
  onIncreace,
  onDelete,
  initialLoad,
  index,
}) => {
  const [isDelete, setIsDelete] = useState(false);

  const onDeleteItem = () => {
    setIsDelete(true);
    setTimeout(() => {
      onDelete(id);
      setIsDelete(false);
    }, 500);
  };

  return (
    <li
      style={initialLoad ? { animationDelay: `${index * 100}ms` } : {}}
      className={`flex flex-col gap-y-4 sm:flex-row justify-between sm:items-center ${
        isIncreace ? 'text-orange-600 like increase' : ''
      } animate__animated ${initialLoad ? 'animate__fadeInLeft' : ''} ${
        isDelete ? 'animate__zoomOut' : ''
      }`}
    >
      <span className='w-full max-w-80 break-words'>{name}</span>
      <span className=''>{salaryFormatter(salary)}</span>

      <div className='flex items-center self-end sm:self-center justify-center gap-x-2'>
        <button
          onClick={() => onIncreace(id)}
          type='button'
          className='bg-yellow-100 rounded-sm p-2 group'
        >
          <img
            className='w-6 h-6 relative group-hover:animate-rotator'
            src={cookie}
            alt='cookie'
          />
        </button>

        <button
          onClick={onDeleteItem}
          type='button'
          className='bg-red-200 transition-all duration-300 hover:bg-red-400 rounded-sm p-2 group'
        >
          <img
            className='w-6 h-6 relative group-hover:-top-[2px]'
            src={truck}
            alt='trash'
          />
        </button>
        <img
          className={`relative transition-all duration-300 left-5 opacity-0 w-6 h-6 ${
            isIncreace ? 'left-0 opacity-100' : ''
          }`}
          src={star}
          alt='start'
        />
      </div>
    </li>
  );
};

export default EmployeesListItem;
