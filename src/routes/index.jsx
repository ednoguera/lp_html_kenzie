import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home/index'
import ThankYouPage from '../pages/typ'

const Router = () => {
    return (
        <>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/obrigado">
                    <ThankYouPage />
                </Route>

            </Switch>
        </>
    )
}



export default Router