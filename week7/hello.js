import React from "React";
import World from "./world";

// http://localhost:3001/hello
export default function Hello() {
    return (
        <>
        <h1> hello, 
            <World name="World" />!
        </h1>
        <img src="cat.jpg" alt="cat" />
        </>
    );
}