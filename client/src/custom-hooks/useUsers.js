import { useEffect, useState } from "react";
import userService from "../services/userService";

export default function useUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await userService.getAll();
            setUsers(data)
        })()

    }, [])

    return [users, setUsers];
}