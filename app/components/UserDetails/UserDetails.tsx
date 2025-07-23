"use client"
import React, { useState } from "react";

export default function UserDetails() {
    const [email, setEmail] = useState("")


    const handleSubmit = (e: any) => {
        e.preventDefault()
        localStorage.setItem("email", email)
        const user = localStorage.getItem("email")
        
        alert("hello " + user)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="">Username</label>
        <input
          type="name"
          name=""
          required
          id=""
          placeholder="John doe"
          className="border p-2 w-fit rounded-lg focus:outline-0 border-zinc-400"
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          required
          id=""
          placeholder="example@gmail.com1234"
          className="border p-2 w-fit rounded-lg focus:outline-0 border-zinc-400"
        />
        <label htmlFor="">Username</label>
        <input
          type="password"
          name=""
          id=""
          aria-hidden="false"
          placeholder="****"
          className="border p-2 w-fit rounded-lg focus:outline-0 border-zinc-400"
        />

        <button  className="w-fit p-2 btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}
