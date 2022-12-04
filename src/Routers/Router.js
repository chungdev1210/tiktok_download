import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Errors from '../Pages/Errors/Errors';

export const routes = (
    <Routes>
        <Route path='/' end element={<Home />} />
        <Route path='*' end element={<Errors />} />
    </Routes>
)