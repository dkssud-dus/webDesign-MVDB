import React from 'react'
import Banner from './banner/Banner'
import PopularMovieSlide from './popularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './topRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './upcomingMovieSlide/UpcomingMovieSlide'
import NowPlayingMovieSlide from './nowPlayingMovieSlide/NowPlayingMovieSlide'

import { Container } from 'react-bootstrap'

const HomePage = () => {

  const movieSection = [
    {
      id: "Popular",
      title: "Popular",
      desc: "인기 있는 영화를 추천합니다.",
      component: <PopularMovieSlide/>
    },
    {
      id: "Now Playing",
      title: "Now Playing",
      desc: "현재 상영 영화를 추천합니다.",
      component: <NowPlayingMovieSlide/>
    },
    {
      id: "Top Rated",
      title: "Top Rated",
      desc: "평점 높은 영화를 추천합니다.",
      component: <TopRatedMovieSlide/>
    },
    {
      id: "Upcoming",
      title: "Upcoming",
      desc: "최신 개봉 영화를 추천합니다.",
      component: <UpcomingMovieSlide/>
    },
  ]
  
  return (
    <div className='homepage'>
      <Banner></Banner>
      <Container>
        {movieSection.map(section => (
          <div key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.desc}</p>
            {section.component}
          </div>
        ))}
      </Container>
    </div>
  )
}

export default HomePage