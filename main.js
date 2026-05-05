import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function GithubProfile() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile />);