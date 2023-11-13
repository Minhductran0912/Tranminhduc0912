import { useState } from "react";
import { ReactDOM } from "react-dom/client";

function Compoment1() {
    const [user, setUser] = useState("Minh Duc");

    return (
        <>
            <h1>{`Hello ${user}!`}</h1>
            <Compoment2 user={user} />
        </>
    );
}

function Compoment2({user}) {
    return (
        <>
            <h1>Compoment 2</h1>
            <Compoment3 user = {user} />
        </>
    );
}

function Compoment3 ({user}) {
    return (
        <>
            <h1>Compoment 3</h1>
            <Component4 user = {user} />
        </>
    );
}

function Component4 ({user}) {
    return (
        <>
            <h1>Component 4</h1>
            <Compoment5 user = {user} />
        </>
    );
}

function Compoment5({user}) {
    return (
        <>
            <h1>Compoment 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Compoment1/>)