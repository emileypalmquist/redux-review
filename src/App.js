import "./App.css";
import { useEffect, useReducer, useState } from "react";
import MainPage from "./pages/MainPage";

import { parksReducer } from "./globalState/reducers/parksReducer";
import { initialParks } from "./globalState/initialStates";
import { AppContext } from "./globalState/context";

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
