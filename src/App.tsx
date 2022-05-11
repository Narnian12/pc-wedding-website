import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/">Home</Link>
      <Link to="/event">Event</Link>
    </div>
  );
}

export default App;
