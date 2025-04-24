import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './globals.css'
import Home from './pages/Home'

import Layout from './components/Layout'
import Register from './pages/register'
import Formations from './pages/Formations'
import Formation from './components/Formation'
import Activites from '@/components/Activites'
import { AnimatePresence } from 'framer-motion'
// import { StrictMode } from 'react'
createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <Router>
            <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/inscription' element={<Register />} />
                <Route path='/inscription/:course' element={<Register />} />
                <Route path='/formations_diplomantes' element={<Formations />} />
                <Route path='/formations_diplomantes/:course' element={<Formation />} />
                <Route path='/activites' element={<Activites />} />
                </Route>
            </Routes>
            </AnimatePresence>
        </Router>
    // </StrictMode>
)
