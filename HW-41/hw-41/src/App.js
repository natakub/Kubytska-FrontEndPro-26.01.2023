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
          <FontAwesomeIcon icon={faFaceSmile} style={{ color: "#ffffff" }} />
        }
        smilePooIcon={
          <FontAwesomeIcon icon={faPoo} style={{ color: "#ffffff" }} />
        }
        heartsIcon={
          <FontAwesomeIcon
            icon={faFaceGrinHearts}
            style={{ color: "#ffffff" }}
          />
        }
      />
    </div>
  );
}

export default App;
