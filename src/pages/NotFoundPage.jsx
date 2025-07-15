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
        <span>이런!</span>
        <strong>찾으시는 페이지가 없습니다.</strong>
      </div>
      <Link className="notFound-button" to={'/'}>
        되돌아가기
      </Link>
    </div>
  )
}

export default NotFoundPage
