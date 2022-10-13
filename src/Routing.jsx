import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Game from './Pages/Game.jsx';
import Highscores from './Pages/Highscores.jsx';
import Play from './Pages/Play.jsx';
import ChoseLocation from './Pages/ChoseLocation.jsx';

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/game'} element={<Game/>}>
                <Route path={'location'} element={<ChoseLocation/>}/>
                <Route path={'play/:chosenLocation'} element={<Play/>}/>
            </Route>
            <Route path={'/highscores'} element={<Highscores/>}></Route>
        </Routes>
    )
}

export default Routing;
