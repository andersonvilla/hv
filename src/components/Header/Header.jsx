import React from 'react'
import foto from '../../assets/Images/foto.png';

const Header = () => {
    return (
      <header className ='bg-[#57C8B4] flex flex-row justify-around'>
        <div className='flex flex-col justify-center '>
          <h1 className='font-bold text-center text-base'>ANDERSON ESTIVEN VILLA SIERRA</h1>
          <h3 className='font-semibold text-center text-sm'>Estudiante de Ingeniería de Sistemas</h3>
        </div>  
        <img src={foto} className='w-4/12 m-2 '/>
      </header>
    )
}

export default Header
