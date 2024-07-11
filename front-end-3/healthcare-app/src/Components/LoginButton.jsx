import { useState } from 'react';

function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick} className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-400 hover:bg-peru-500 text-gainsboro-50 hover:bg-primary/90 h-9 rounded-md px-10 ml-auto'>Log In</button>
      {isOpen && (
        <dialog open className='w-96 h-content border border-peru-300 absolute rounded-md py-3 z-50'>
          <h2 className='font-bold text-3xl text-center'>Login</h2>
          <button onClick={handleClose} className='absolute top-0 right-3 text-peru-500 text-2xl px-2 mt-2 bg-gainsboro-100 dark:bg-gainsboro-700 rounded-lg'>X</button>
          {/* Insert your login form here */}
          <form action="" className='flex flex-col gap-3 items-center mt-10'>
            <input type="email" placeholder='Email' className='bg-gainsboro-200 w-[90%] rounded-md py-2 px-3 focus:outline-none focus:border-peru-700'/>
            <input type="password" placeholder='Password' className='bg-gainsboro-200 w-[90%] rounded-md py-2 px-3'/>
            <button className='bg-gainsboro-700 text-white w-[50%] py-1 text-xl'>Login</button>
            <p className='text-[0.6rem] text-gainsboro-300'>Made by Christian & Daddy</p>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default LoginButton;
