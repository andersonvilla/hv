import React from 'react'

const Additional = () => {
    return (
      <div className='justify-center '>
          <hr className='border-1 border-[#57C8B4] w-full'/>
          <h3 className='font-semibold text-[#57C8B4] text-center'>Hobbies</h3>
          <ul className='list-disc list-inside m-3'>
              <li>Jugar Pokémon</li>
              <li>Cine Independiente</li>
              <li>Escuchar música</li>
              <li>Arte</li>
          </ul>
          <hr/>
          <h3 className='font-semibold text-[#57C8B4] text-center'>Cursos y Certificaciones</h3>
          <ul className='list-disc list-inside m-3'>
              <li>Bash - Intérprete de Comandos de Linux</li>
              <li>Fundamentos de Programación con Java</li>
              <li>Version Control with Git</li>
              <li>Job Roles in the Cloud</li>
              <li>AWS Shared Responsibility Model</li>
              <li>AWS Cloud Practitioner Essentials</li>
          </ul>
      </div>
    )
}

export default Additional