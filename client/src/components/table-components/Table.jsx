import { useState, useEffect } from "react"

import userService from "../../fetch-api/userService"

import THead from "./TableHead"
import TableRow from "./TableRow"
import UserDetailsModal from '../user/UserDetailsModal'
import DeleteUserModal from '../user/DeleteUserModal'
import Button from "../button/Button"
import Spinner from "../spinner/Spinner"

export default function Table() {

    const [users, setUsers] = useState([]);
    const [userIdDetails, setUserIdDetails] = useState(null);
    const [userIdDelete, setUserIdDelete] = useState(null);


    function showInfoButtonModal(id) {
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


    }

    useEffect(() => {
        (async () => {
            const data = await userService.getAll();
            setUsers(data);
        })()

    }, [])

    return (
        <>

            {userIdDetails && <UserDetailsModal
                id={userId}
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
                            onInfoButtonClick={showInfoButtonModal}
                            onDeleteButtonClick={showUserDeleteModal}
                        />
                    ))}
                </tbody>

            </table>
        </>
    )
}