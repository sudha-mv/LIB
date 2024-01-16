import "../../styles/user.css"
import { useEffect, useState } from "react";

const Users = () => {
    let [Users, setUsers] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4000/Users")
            let data = await response.json()
            setUsers(data)
        }
        fetchData()
    })
    let deletefix =(id) =>{
        fetch(`http://localhost:4000/Users/${id}`,{
            method:'DELETE'
        })
    }

    return (
        <div className="Users">
            <h1>Users</h1>
            <div id="user2">{Users.map((data) => (
                <div id="users1">
                    <div> <b> Firstname:</b>{data.firstname}</div>
                    <div> <b> Lastname:</b>{data.lastname}</div>
                    <div> <b> Gmail:</b>{data.email}</div>
                    <div> <b> Moble:</b>{data.phone}</div><br />
                    <button id="Deleteuser" onClick={()=>deletefix(data.id)}>Delete</button>
                </div>
            ))}

            </div>
        </div>
    );
}

export default Users;