import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import Home from './comp/Home';
import Road from './comp/Road';
import Detail from './comp/Detail';

function App() {
  return (

    <BrowserRouter>
      <div className="wrap">

        <header>
          <nav>
            <Link to="/"> Mountain </Link>
            <Link to="/hiking"> Forest road </Link>
            <Link to="/detail"> Detail </Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hiking' element={<Road />} />
            <Route path='/detail' element={<Detail />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>

  );
}

export default App;
