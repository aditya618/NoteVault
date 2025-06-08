import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NotesPage from './pages/NotesPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <div className='min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/notes' element={<NotesPage />}></Route>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='*' element={<NotFoundPage />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
