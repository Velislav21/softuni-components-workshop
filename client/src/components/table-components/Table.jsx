import THead from "./TableHead"
import TBody from "./TableBody"
import UserDetailsModal from "../user/UserDetailsModal"
import AddEditUserModal from "../user/AddEditUserModal"
export default function Table() {
    return (

        <table className="table">
            <THead />
            <TBody />
        </table>
    )
}