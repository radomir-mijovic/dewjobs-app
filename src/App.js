import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import GlobalStyle from "./components/globalStyle/GlobalStyle";
import Navbar from "./components/navbar/Navbar";
import {useStyleContext} from "./context/style_context";
import {AnimatePresence} from "framer-motion"


function App() {
    const {isLight} = useStyleContext()
    const location = useLocation()

    return (
        <>
            <GlobalStyle isLight={isLight}/>
            <Navbar/>
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route exact path='/' component={JobsPage}/>
                    <Route path='/job-detail/:id' component={JobDetailPage}/>
                </Switch>
            </AnimatePresence>
        </>
    );
}

export default App;
