import SearchBar from "./search/SearchBar"
import Table from "./table-components/Table"
import Button from "./button/Button"
import Pagination from "./pagination/Pagination"


export default function MainSection() {
    return (
        <section className="card users-container">
            <SearchBar />
            <div className="table-wrapper">
                <Table />
            </div>

            <Button className="btn btn-add">Add new user</Button>
            <Pagination />
        </section>
    )
}