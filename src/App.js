import Router from "./routes/";
import "./App.css";

function App({ dataLayer }) {
  return (
    <div className="App">
      <Router dataLayer={dataLayer} />
    </div>
  );
}

export default App;
