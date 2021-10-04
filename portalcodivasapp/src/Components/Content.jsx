import { Switch, Route } from "react-router-dom";


import RecorvyPassword from "../Pages/recorvy-password/recorvy-passoword";
const Content = () => {
    return (
        <main className="main-content">
            <Switch>
                <Route exact path="/">
                    <h2>HOME</h2>
                    {/* IMPORT & INSERT PAGE CONTENT HERE */}
                </Route>
                <Route path="/projects">
                    <h2>PROJECTS</h2>
                    {/* IMPORT & INSERT PAGE CONTENT HERE */}
                </Route>
                <Route path="/recorvy-password">
                    { /*this is just an adaptation for development mode. */ }
                    { process.env.NODE_ENV === 'development' && <RecorvyPassword /> }
                </Route>
            </Switch>
        </main>
    )
}

export default Content;