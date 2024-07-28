 

const AppInfo = ({ total }) => {
  const premieList = [...total.filter((el) => el.isIncreace === true)];
  const totalEmplolyees = total.length;
  return (
    <div className='p-6 bg-[var(--bg)] rounded-md shadow-lg text-white'>
      <h1 className='text-2xl sm:text-3xl'>Employee accounting in the company 'M&J'</h1>
      <h2 className='text-xl sm:text-3xl'>
        Total number of employees: <span>{totalEmplolyees}</span>
      </h2>
      <h2 className='text-xl sm:text-3xl'>
        The prize will be received: <span>{premieList.length}</span>
      </h2>
    </div>
  );
};

export default AppInfo;
