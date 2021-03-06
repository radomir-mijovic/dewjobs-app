import React, {useEffect} from "react";
import {Switch, Route, useLocation, Redirect} from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import GlobalStyle from "./components/globalStyle/GlobalStyle";
import Navbar from "./components/navbar/Navbar";
import {useStyleContext} from "./context/style_context";
import {AnimatePresence} from "framer-motion"
import {useJobsContext} from "./context/job_context";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
    const location = useLocation()
    const {getAllJobs} = useJobsContext()
    const {isLight, isModal} = useStyleContext()

    useEffect(() => {
        getAllJobs()
    }, [])

    return (
        <>
            <GlobalStyle isModal={isModal} isLight={isLight}/>
            <Navbar/>
            <AnimatePresence>
                <ScrollToTop/>
                <Switch location={location} key={location.pathname}>
                    <Route exact path='/' component={JobsPage}/>
                    <Route path='/job-detail/:id' component={JobDetailPage}/>
                    <Route path='*' render={() => <Redirect to={'/'}/>} />
                </Switch>
            </AnimatePresence>
        </>
    );
}

export default App;
