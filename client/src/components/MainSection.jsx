import { useState, useEffect } from "react"

import THead from './table-components/TableHead'
import TableRow from './table-components/TableRow'
import SearchBar from "./search/SearchBar"
import Button from "./button/Button"
import Pagination from "./pagination/Pagination"
import AddEditUserModal from './user/AddEditUserModal'
import UserDetailsModal from "./user/UserDetailsModal"
import DeleteUserModal from './user/DeleteUserModal'

import userService from "../services/userService"
import useUsers from "../custom-hooks/useUsers"

export default function MainSection() {

    const [users, setUsers] = useUsers();

    const [showCreateUserModal, setShowCreateUserModal] = useState(false);
    const [userIdEdit, setUserIdEdit] = useState(null);
    const [userIdDetails, setUserIdDetails] = useState(null);
    const [userIdDelete, setUserIdDelete] = useState(null);


    function showInfoModal(id) {
        setUserIdDetails(id);
    }

    function closeUserInfoModal() {
        setUserIdDetails(null);
    }

    function showUserDeleteModal(id) {
        setUserIdDelete(id)
    }

    function closeUserDeleteModal() {
        setUserIdDelete(null);
    }

    async function deleteButtonClickHandler(e, id) {
        e.preventDefault();

        await userService.deleteUser(id);
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id))

        setUserIdDelete(null);

        // !TODO add error handling
    }

    function showAddUserModal() {
        setShowCreateUserModal(true);
    }

    function showEditUserModal(id) {
        setUserIdEdit(id);
    }

    function hideUserCreateModal() {
        setShowCreateUserModal(false)
    }

    async function createUser(e) {
        e.preventDefault();

        const form = e.target.parentElement.parentElement
        const fd = new FormData(form);

        const data = Object.fromEntries(fd.entries())

        const user = await userService.createUser(data);

        setUsers((prevUsers) => [...prevUsers, user])

        setShowCreateUserModal(false);
    }

    return (
        <section className="card users-container">
            <SearchBar />
            <div className="table-wrapper">
                {userIdDetails && <UserDetailsModal
                    id={userIdDetails}
                    onClose={closeUserInfoModal}
                />}

                {userIdDelete && <DeleteUserModal
                    id={userIdDelete}
                    onClose={closeUserDeleteModal}
                    onDelete={deleteButtonClickHandler}
                />}

                <table className="table">
                    <THead />
                    <tbody>
                        {users.map((user) => (

                            <TableRow
                                key={user._id}
                                {...user}
                                onEditButtonClick={showAddUserModal}
                                onInfoButtonClick={showInfoModal}
                                onDeleteButtonClick={showUserDeleteModal}
                            />
                        ))}
                    </tbody>

                </table>
            </div>

            {showCreateUserModal && <AddEditUserModal
                id={userIdDetails}
                onCreate={createUser}
                // onEdit={ }
                hideModal={hideUserCreateModal}
            />}

            <Button
                className="btn btn-add"
                onClick={showAddUserModal}
            >Add new user</Button>
            <Pagination />
        </section>
    )
}