import React from 'react'
import git from '../../assets/Images/git.png'
import linkedin from '../../assets/Images/linkedin.png'

const Footer = () => {
    return (
      <footer>
          <hr/>
          <img src={git}/>
          <img src={linkedin}/>
          <span>Calle 30 c # 42 - 132 Bello - Antioquia</span>
          <span>anderson9771@gmail.com</span>
          <span>+57 3117538819</span>
      </footer>
    )
}

export default Footer