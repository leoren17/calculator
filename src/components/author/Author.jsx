import React from 'react'
import { FaGithub } from 'react-icons/fa';
import './author.css';

const Author = () => {
  return (
    <div className="Author">
      <a href="https://github.com/leoren17/calculator" target="_blank">
        <FaGithub className="github"/>
      </a>
    </div>
  )
}

export default Author