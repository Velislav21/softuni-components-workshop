import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import SearchBar from './components/search/SearchBar'
import Table from './components/table-components/Table'
import Pagination from './components/pagination/Pagination'
import Button from './components/button/Button'
import './App.css'

function App() {

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <SearchBar />
                    <div className="table-wrapper">
                        <Table />
                    </div>

                    <Button className="btn btn-add">Add new user</Button>
                    <Pagination />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App
