import React from 'react';
import foto from 'assets/Images/foto.png';

const Header = () => {
  return (
    <header className='bg-[#57C8B4] flex flex-row justify-around'>
      <div className='flex flex-col justify-center '>
        <h1 className='font-bold text-center text-base md:text-xl lg:text-3xl'>
          ANDERSON ESTIVEN VILLA SIERRA
        </h1>
        <h3 className='font-semibold text-center text-sm md:text-lg lg:text-lg'>
          Estudiante de Ingeniería de Sistemas
        </h3>
      </div>
      <img src={foto} alt='perfil' className='w-3/12 lg:w-2/12 m-2' />
    </header>
  );
};

export default Header;
