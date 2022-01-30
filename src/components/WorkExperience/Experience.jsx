import React from 'react'

const Experience = () => {
    return (
      <div className='justify-center m-4 '>
        <hr className='border-1 border-[#57C8B4] w-full lg:hidden md:hidden'/>
        <h3 className='font-semibold text-[#57C8B4] text-center lg:text-lg'>Experiencia Laboral</h3>
        <div className='m-3'>
        <h3 className='font-bold'>Bancolombia| Agosto 2021 - Octubre 2021</h3>
        <span className='text-sm'>Ingeniero de Software back-end</span>
        <br/>
        <ul className='list-disc list-inside align-middle text-sm'>
            <br/><li>Análisis y diseño de las aplicaciones</li>
            <li>Configuraciones previas al desarrollo</li>
            <li>Codificación de la aplicación</li>
            <li>Pruebas y despliegue</li>
        </ul>
        <br/><h3 className='font-bold'>Universidad de Antioquia| Febrero 2020 - Agosto 2021</h3>
        <span className='text-sm'>Auxiliar de programación</span>
        <ul className='list-disc list-inside text-sm'> 
            <br/><li>Acompañamiento en procesos técnicos del instituto</li>
            <li>Soporte a la unidad académica y administrativa</li>
            <li>Soporte en procesos técnicos del instituto</li>
            <li>Administración y organización de la información correspondiente al instituto</li>
        </ul>
        </div>
      </div>
    )
}

export default Experience