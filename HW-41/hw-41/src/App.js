import VoteWidget from "./components/Vote-widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <VoteWidget
        smileIcon={
          <FontAwesomeIcon icon={faFaceSmile} style={{ color: "#61dafb" }} />
        }
        smilePooIcon={
          <FontAwesomeIcon icon={faPoo} style={{ color: "#61dafb" }} />
        }
        heartsIcon={
          <FontAwesomeIcon
            icon={faFaceGrinHearts}
            style={{ color: "#61dafb" }}
          />
        }
      />
    </div>
  );
}

export default App;
