import React from 'react'
import git from '../../assets/Images/git.png'
import linkedin from '../../assets/Images/linkedin.png'

const Footer = () => {
    return (
      <footer className='flex flex-col items-center'>
          <hr className='border-1 border-[#57C8B4] w-full'/>
          <div className='grid grid-cols-2 w-2/12'>
            <a href='https://github.com/andersonvilla/'>
            <img src={git} className='mr-6 mt-2'/>
            </a>
            <a href ='https://www.linkedin.com/in/anderson-villa-sierra-92776a213/'>
            <img src={linkedin} className='ml-6 mt-2'/>
            </a>
          </div>
          <div className='text-[#D838BE] text-center flex flex-col'>
            <span>Calle 30 c # 42 - 132 Bello - Antioquia</span>
            <span>anderson9771@gmail.com</span>
            <span>+57 3117538819</span>
          </div>
      </footer>
    )
}

export default Footer