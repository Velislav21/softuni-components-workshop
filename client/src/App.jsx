import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MainSection from './components/MainSection'

import './App.css'

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <MainSection />
            </main>
            <Footer />
        </>
    )
}

export default App
