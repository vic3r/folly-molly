import * as React from "react";
import * as ReactDOM from "react-dom";
import ExampleComponent from "./components/ExampleComponent";
import UserComponent from "./components/UserComponent";

ReactDOM.render(
    <div>
        <h1>Hello, Welcome to React and TypeScript</h1>
        <ExampleComponent />
        <UserComponent name="vimgarc" age={26} address="88 street WA" dob={new Date()} />
    </div>,
    document.getElementById("root")
);
