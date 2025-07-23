import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='notFound'>
      <div className="notFrond-logo">
        <h2>4<em>0</em>4</h2>
        <img src="../../images/404.png" alt="404" />
      </div>
      <div className="notFound-text">
        <span>Oops!</span>
        <strong>The page you're looking for doesn't exist.</strong>
      </div>
      <Link className="notFound-button" to={'/'}>
      Go back home
      </Link>
    </div>
  )
}

export default NotFoundPage
