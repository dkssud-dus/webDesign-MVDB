import React from 'react'

// Components
import Banner from './banner/Banner'
import PopularMovieSlide from './popularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './topRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './upcomingMovieSlide/UpcomingMovieSlide'
import NowPlayingMovieSlide from './nowPlayingMovieSlide/NowPlayingMovieSlide'

import { Container } from 'react-bootstrap'

const HomePage = () => {
  
  // Slide Data
  const movieSection = [
    {
      id: "Popular",
      title: "Popular",
      desc: "These hits are just too good to miss!",
      component: <PopularMovieSlide/>
    },
    {
      id: "Now Playing",
      title: "Now Playing",
      desc: "Catch ‘em while they’re still hot in theaters!",
      component: <NowPlayingMovieSlide/>
    },
    {
      id: "Top Rated",
      title: "Top Rated",
      desc: "Critics love them, and so will you!",
      component: <TopRatedMovieSlide/>
    },
    {
      id: "Upcoming",
      title: "Upcoming",
      desc: "Coming soon... Get ready for the big screen thrill!",
      component: <UpcomingMovieSlide/>
    }
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