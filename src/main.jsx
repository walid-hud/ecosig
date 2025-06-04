import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import './globals.css'
import Home from './pages/Home'

import Layout from './components/Layout'
import Register from './pages/register'
import Formations from './pages/Formations'
import Formation from './components/Formation'
import Activites from '@/components/Activites'
import About from './pages/About'
import PageNotFound from './components/PageNotFound'
import { BarLoader } from 'react-spinners'
// import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <Suspense fallback={<BarLoader width={"100vw"} color={"var(--color-blue-600)"} loading={true}/>}>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/préinscription' element={<Register />} />
                    <Route path='/préinscription/:course' element={<Register />} />
                    <Route path='/formations_diplomantes' element={<Formations />} />
                    <Route path='/formations_diplomantes/:course' element={<Formation />} />
                    <Route path='/activites' element={<Activites />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </Router>
    </Suspense>
    // </StrictMode>
)
