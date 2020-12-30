import './App.css';
import PostcardView from './pages/postcardview/postcardview';
import PostView from './pages/postview/postview';
import PostForm from './pages/postform/postform.view';
import PostUpdate from './pages/postupdateview/postUpdateview';
import 'materialize-css';
import {LANDING, POSTCARD, POST, POSTFORM, POSTUPDATE ,ESCRIBENOS} from './routes/routes';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import { PostsProvider } from './contexts/postcontext';
import Escribenos from './pages/ecribenos/escribenos';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Switch>
            <PostsProvider>
              <Route exact path={LANDING}>
                <PostcardView />
              </Route>
              <Route exact path={POSTCARD}>
                <PostcardView />
              </Route>
              <Route exact path={POST}>
                <PostView />
              </Route>
              <Route exact path={POSTFORM}>
                <PostForm />
              </Route>
              <Route exact path={POSTUPDATE}>
                <PostUpdate />
              </Route>
            <Route exact path={ESCRIBENOS}>
                <Escribenos />
              </Route>
            </PostsProvider>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
