import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title" color="inherit">
            External React App
          </TypoGraphy>
          <Navbar />
        </Toolbar>
      </AppBar>
      <SearchBox />
    </div>
  );
}

export default App;
