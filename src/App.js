// Layout
import AppLayout from './layouts/AppLayout';

// Pages
import HomePage from './pages/HomePage/HomePage'
import MoviePage from './pages/MoviePage/MoviePage'
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage'
import Login from './pages/Login'
import MyPage from './pages/MyPage'
import NotFoundPage from './pages/NotFoundPage'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss'

// Router
import { Routes, Route } from 'react-router-dom';

// App
function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout></AppLayout>}>

        {/* Main */}
        <Route index element={<HomePage></HomePage>}></Route>

        {/* Move */}
        <Route path='/movie'>
          <Route index element={<MoviePage></MoviePage>}></Route>
          <Route path=':id' element={<MovieDetailPage></MovieDetailPage>}></Route>
        </Route>

        {/* Login, My, 404 */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/mypage' element={<MyPage></MyPage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        
      </Route>
    </Routes>
  );
}

export default App;
