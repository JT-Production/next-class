"use client"
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
const UserPage = () => {
  const [users, setUsers] = useState<User[]>([])
 async function userDetails() {
   try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const data = await res.json();
  setUsers(data)
  } catch(err: any) {
    console.log("error: ", err)
  }
 }
 const userEmail = localStorage.getItem("email")
 userDetails()
  return (
    <>
      <h1 className="text-2xl font-bold">UserPage</h1>
      <p className="text-lg font-bold">Users list</p>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table tabs-border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Emails</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>

            </tr>
          ))}
          <p>{userEmail}</p>
        </tbody>
      </table>
    </>
  );
};

export default UserPage;
