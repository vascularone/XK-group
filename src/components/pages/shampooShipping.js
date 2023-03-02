import { useState } from "react";
import $ from "jquery";
import "./productCSS.css";
const Shampoo = () => {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
    const [lastName, setLastName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };

    return (
        <div>
            <form
                action="http://localhost:8000/server.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(event) => handleLastNameChange(event)}
                />
                <br />
                <input type="submit" />
            </form>
            <h1>{result}</h1>
        </div>
    );
}

export default Shampoo;
