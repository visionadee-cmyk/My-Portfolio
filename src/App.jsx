import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import CV from './pages/CV'
import Skills from './pages/Skills'
import WebApps from './pages/WebApps'
import Photography from './pages/Photography'
import Training from './pages/Training'
import Videography from './pages/Videography'
import Architecture3D from './pages/Architecture3D'
import GraphicDesign from './pages/GraphicDesign'
import ContentCreator from './pages/ContentCreator'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/webapps" element={<WebApps />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/training" element={<Training />} />
            <Route path="/videography" element={<Videography />} />
            <Route path="/architecture-3d" element={<Architecture3D />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/content-creator" element={<ContentCreator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
