import React from 'react'

// Components
import TopRatedMovieSlide from './HomePage/topRatedMovieSlide/TopRatedMovieSlide'
import PopularMovieSlide from './HomePage/popularMovieSlide/PopularMovieSlide'

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

const MyPage = () => {
  return (
    <div className='my-page'>
      <Container>
        <h2>Profile</h2>
        <Row>
          <Col md={4} className="left-box">
            <div className="my-image">
              <img src="../../images/my-image.png" alt="my-pic" />
            </div>
            <div className="my-info">
              <h3></h3>
              <ul>
                <li>
                  <b>Email</b>
                  <span>movieholic@movieholic.com</span>
                </li>
                <li>
                  <b>Name</b>
                  <span>movieholic</span>
                </li>
                <li>
                  <b>Gender</b>
                  <span>Not Selected</span>
                </li>
                <li>
                  <b>Birth</b>
                  <span>2025.07.24.</span>
                </li>
                <li>
                  <b>About Me</b>
                  <span>My life is basically a movie montage. Popcorn not included, but highly recommended.</span>
                </li>
                <li>
                  <b>Social Media</b>
                  <ul>
                    <li><img src="../../images/sns-icon (4).png" alt="Facebook" /></li>
                    <li><img src="../../images/sns-icon (2).png" alt="Twitter" /></li>
                  </ul>
                </li>
                <li>
                  <a href="#none">Edit</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={8} className="right-box">
            <div className="my-movie-list">
              <h3>Watched List</h3>
              <TopRatedMovieSlide />
              <PopularMovieSlide />
            </div>
            <div className="my-movie-stats">
              <ul>
                <li>
                  <b>Number of Movies Watched</b>
                  <span>192</span>
                </li>
                <li>
                  <b>Number of Movies Rated</b>
                  <span>123</span>
                </li>
              </ul>
            </ div>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyPage