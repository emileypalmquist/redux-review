import "./App.css";
import { useEffect, useReducer, useState } from "react";
import MainPage from "./pages/MainPage";

import { parksReducer } from "./stateContainer/reducers/parksReducer";
import { initialParks } from "./stateContainer/initialStates";
import { AppContext } from "./stateContainer/context";

function App() {
  const [parksState, parksDispatch] = useReducer(parksReducer, initialParks);
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("selectedParkId");
    if (id) {
      setSelectedPark(id);
    }
    // return () => { localStorage.removeItem('selectedParkId')}
  }, []);

  return (
    <AppContext.Provider
      value={{
        parks: parksState,
        parksDispatch,
        selectedPark,
        setSelectedPark,
      }}
    >
      <div className="App">
        <MainPage />
      </div>
    </AppContext.Provider>
  );
}

export default App;
