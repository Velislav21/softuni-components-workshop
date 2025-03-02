import { useState } from "react"

import SearchBar from "./search/SearchBar"
import Table from "./table-components/Table"
import Button from "./button/Button"
import Pagination from "./pagination/Pagination"
import AddEditUserModal from './user/AddEditUserModal'

import userService from "../fetch-api/userService"

export default function MainSection() {

    const [showCreateUserModal, setShowCreateUserModal] = useState(false);

    function showModal() {
        setShowCreateUserModal(true);
    }

    function hideModal() {
        setShowCreateUserModal(false)
    }

    async function createUser(e) {
        e.preventDefault();

        const form = e.target.parentElement.parentElement
        const fd = new FormData(form);

        const data = Object.fromEntries(fd.entries())

        const user = await userService.createUser(data);
        setShowCreateUserModal(false);
    }

    return (
        <section className="card users-container">
            <SearchBar />
            <div className="table-wrapper">
                <Table />
            </div>

            {showCreateUserModal && <AddEditUserModal
                action={'create'}
                actionFn={createUser}
                hideModal={hideModal}
            />}

            <Button
                className="btn btn-add"
                onClick={showModal}
            >Add new user</Button>
            <Pagination />
        </section>
    )
}