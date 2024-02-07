import HomePage from "./pages/HomePage";
import { GlobalContextProvider } from "./GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div>
        <HomePage />
      </div>
    </GlobalContextProvider>
  );
}

export default App;