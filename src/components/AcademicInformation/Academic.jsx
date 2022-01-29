import React from 'react'

const Academic = () => {
    return (
      <div className='justify-center m-4'>
        <hr className='border-1 border-[#57C8B4] w-full lg:hidden md:hidden'/>
        <h3 className='font-semibold text-[#57C8B4] text-center'>Información Académica</h3>
        <div className='m-3'>
          <h3 className='font-semibold'>Ingeniería de Sistemas| Febrero 2017 - Actualidad</h3>
          <span>Universidad de Antioquia<br/></span>
          <br/><h3 className='font-semibold'>Historia | Febrero 2015 - Noviembre 2016</h3>
          <span>Universidad de Antioquia<br/></span>
          <br/><h3 className='font-semibold'>Primaria - Bachillerato| Enero 2003- Noviembre 2014</h3>
          <span>Institución Educativa La Gabriela</span>
        </div>

      </div>
    )
}

export default Academic