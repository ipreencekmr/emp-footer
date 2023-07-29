import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { SocialNetwork } from "./components/SocialNetwork";
import { UsefulLinks } from "./components/UsefulLinks";
import { ContactUs } from "./components/ContactUs";
import { Copyright } from "./components/Copyright";

const App = () => (
    <footer className="text-center text-lg-start bg-light text-muted">
        <Header></Header>
        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <AboutMe></AboutMe>
                    <SocialNetwork></SocialNetwork>
                    <UsefulLinks></UsefulLinks>
                    <ContactUs></ContactUs>
                </div>
            </div>
        </section>
        <Copyright></Copyright>
    </footer>
);

const root = createRoot(document.getElementById("app"));
root.render(<App />);

export default App;
