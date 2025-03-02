import { useState, useEffect } from "react"

import userService from "../../fetch-api/userService"

import THead from "./TableHead"
import TableRow from "./TableRow"
import UserDetailsModal from '../user/UserDetailsModal'
import Button from "../button/Button"
import Spinner from "../spinner/Spinner"

export default function Table() {

    const [users, setUsers] = useState([]);

    const [userIdInfo, setUserIdInfo] = useState(null);

    function onInfoButtonClick(id) {
        setUserIdInfo(id);
    }

    function closeUserInfoModal() {
        setUserIdInfo(null);
    }

    useEffect(() => {
        (async () => {
            const data = await userService.getAll();
            setUsers(data);
        })()

    }, [])

    return (
        <>
        
            {userIdInfo && <UserDetailsModal
                id={userIdInfo}
                onClose={closeUserInfoModal}
            />}

            <table className="table">
                <THead />
                <tbody>
                    {users.map((user) => (

                        <TableRow
                            key={user._id}
                            {...user}
                            onInfoButtonClick={onInfoButtonClick}
                        />
                    ))}
                </tbody>

            </table>
        </>
    )
}