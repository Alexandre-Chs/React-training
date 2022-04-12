import "./App.css";
import FancyInput from "./components/FancyInput";
import { useRef } from "react";

function App() {
  const fancyInputRef = useRef();
  const focusInput = () => {
    fancyInputRef.current.focus();
    fancyInputRef.current.countMax();
  };

  return (
    <div className="App">
      <FancyInput ref={fancyInputRef} />
      <button onClick={focusInput}>Cliquer</button>
    </div>
  );
}

export default App;
