import { useState, useEffect} from "react"

import userService from "../../fetch-api/userService"

import THead from "./TableHead"
import TBody from "./TableBody"
import UserDetailsModal from "../user/UserDetailsModal"
import AddEditUserModal from "../user/AddEditUserModal"
import Spinner from "../spinner/Spinner"

export default function Table() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await userService.getAll();
            setUsers(data);
        })()

    }, [])


    return (

        <table className="table">
            <THead />
            <TBody users={users}/>
        </table>
    )
}