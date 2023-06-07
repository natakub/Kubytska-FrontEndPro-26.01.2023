import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PageUsers from "./pages/PageUsers";
import PageAlbums from "./pages/PageAlbums";
import PagePhotos from "./pages/PagePhotos";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/users" component={PageUsers} />
        <Route exact path="/user/:id/albums" component={PageAlbums} />
        <Route exact path="/user/:id/albums/:id" component={PagePhotos} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
