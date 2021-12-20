import {useEffect} from 'react';
import {withRouter} from "react-router-dom";

const ScrollToTop = ({history}) => {
    useEffect(() => {
        const startOnTop = history.listen(() => {
            window.scroll(0, 0 )
        })
        return () => startOnTop()
    }, [])
    return null
};

export default withRouter(ScrollToTop);