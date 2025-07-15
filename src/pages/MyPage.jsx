import React from 'react'
import TopRatedMovieSlide from './HomePage/topRatedMovieSlide/TopRatedMovieSlide'
import { Container, Row, Col } from 'react-bootstrap'

const MyPage = () => {
  return (
    <div className='my-page'>
      <Container>
        <h2>Profile</h2>
        <Row>
          <Col md={5}>
            <div className="my-image">
              <img src="../../images/my-image.png" alt="my-pic" />
            </div>
            <div className="my-info">
              <ul>
                <li>
                  <b>Name</b>
                  <span>movieholic</span>
                </li>
                <li>
                  <b>Email</b>
                  <span>movieholic@movieholic.com</span>
                </li>
                <li>
                  <b>Password</b>
                  <span>********</span>
                </li>
                <li>
                  <a href="#none">Edit</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={7}>
            <div className="my-movie">
              <ul>
                <li>
                  <b>Number of Movies Watched</b>
                  <span>192</span>
                </li>
                <li>
                  <b>Number of Movies Rated</b>
                  <span>123</span>
                </li>
                <li>
                  <b>Social Media</b>
                  <ul>
                    <li><img src="../../images/sns-icon (4).png" alt="Facebook" /></li>
                    <li><img src="../../images/sns-icon (2).png" alt="Twitter" /></li>
                  </ul>
                </li>
              </ul>
            </ div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Watched List</h3>
            <TopRatedMovieSlide></TopRatedMovieSlide>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyPage