import { useState } from 'react'; 

const AppFilter = ({ setFilterWord }) => {
  const btns = [
    {
      id: 1,
      title: 'All employees',
      filter: 'all',
    },
    {
      id: 2,
      title: 'Up for promotion',
      filter: 'promotion',
    },
    {
      id: 3,
      title: 'Salary is more 2000$',
      filter: 'salary',
    },
  ];

  const [active, setActive] = useState('all');

  return (
    <div className='flex flex-col sm:flex-row sm:max-w-lg text-white   border rounded-md overflow-hidden'>
      {btns.map((btn) => {
        return (
          <button
            key={btn.id}
            onClick={() => {
              setFilterWord(btn.filter);
              setActive(btn.filter);
            }}
            type='button'
            className={`py-2 transition grow h-full ease-in duration-400 px-3 outline-none ${
              active === btn.filter ? 'bg-white text-black' : ''
            }`}
          >
            {btn.title}
          </button>
        );
      })}
    </div>
  );
};

export default AppFilter;
