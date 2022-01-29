import React from 'react'

const Experience = () => {
    return (
      <div className='justify-center'> 
        <hr className='border-1 border-[#57C8B4] w-full lg:hidden'/>
        <h3 className='font-semibold text-[#57C8B4] text-center'>Experiencia Laboral</h3>
        <div className='m-3'>
        <h3 className='font-bold'>Bancolombia| Agosto 2021 - Octubre 2021</h3>
        <span>Ingeniero de Software back-end</span>
        <br/>
        <ul className='list-disc list-inside align-middle'>
            <br/><li>Análisis y diseño de las aplicaciones</li>
            <li>Configuraciones previas al desarrollo</li>
            <li>Codificación de la aplicación</li>
            <li>Pruebas y despliegue</li>
        </ul>
        <br/><h3 className='font-bold'>Universidad de Antioquia| Febrero 2020 - Agosto 2021</h3>
        <span>Auxiliar de programación</span>
        <ul className='list-disc list-inside'> 
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