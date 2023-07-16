import React from 'react';
import Layaout from './components/layaout/Layaout';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Groups from './pages/Groups';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <Layaout>
                        <Dashboard />
                    </Layaout>
                } />
                <Route path='/groups' element={
                    <Layaout>
                        <Groups />
                    </Layaout>
                } />
                <Route path='*' element={
                    <Layaout>
                        <div>Page not found</div>
                    </Layaout>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
