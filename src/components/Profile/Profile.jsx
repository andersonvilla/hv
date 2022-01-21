import React from 'react'

const Profile = () => {
    return (
        <div className='justify-center text-center'>
          <div className='m-4'>
            <h1 className='font-bold text-[#57C8B4]'>Descripción del Perfil</h1>
            <h3 className='font-semibold text-[#57C8B4]'>Resumen Profesional</h3>
            <p className='text-justify'>Soy estudiante de ingeniería de sistemas, con conocimientos técnicos y experiencia en el área deback end. 
              Tengo experiencia en microservicios y base de datos relacionales, y no relacionales. 
              Apasionado por el auto-estudio y el aprendizaje continuo, me motiva mucho trabajar en equipo y buscar nuevas soluciones.
            </p>
          </div> 
          <hr className='border-1 border-[#57C8B4] w-full'/>
          <h3 className='font-semibold text-[#57C8B4]'>Skills</h3>
          <ul className='list-disc list-inside'>
              <li>Java</li>
              <li>SprintBoot</li>
              <li>Investigación</li>
              <li>SQL/NoSQL</li>
              <li>Git</li>
              <li>Metodologías Ágiles</li>
          </ul> 
          <hr className='border-1 border-[#57C8B4] w-full'/>
          <h3 className='font-semibold text-[#57C8B4]'>Idiomas</h3>
          <ul className='list-disc list-inside'>
              <li>Español nativo</li>
              <li>Inglés avanzado</li>
          </ul>
        </div>
    )
}

export default Profile
