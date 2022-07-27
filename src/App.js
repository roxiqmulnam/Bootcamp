import Routes from "./Routes";
import { UserProvider } from "./UserContext";

function App() {
  return (

    <UserProvider>
      {/* <MovieProvider>
      <GameProvider> */}
      <Routes />
    {/* </GameProvider>
    </MovieProvider> */}
    </UserProvider>
  );
}

export default App;
