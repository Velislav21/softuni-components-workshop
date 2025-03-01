import TableRow from "./TableRow"

export default function TBody({ users }) {
    console.log(users)
    return (
        <tbody>
            {users.map((user) => (

                <TableRow key={user._id} {...user}/>
            ))}
        </tbody>
    )
}