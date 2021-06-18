import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  );
}
