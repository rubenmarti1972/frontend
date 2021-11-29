import { useContext } from "react";
import "./App.css";
import AuthContext from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import AuthRouter from "./routers/AuthRouter";
import UnauthRouter from "./routers/UnauthRouter";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="App">
      {auth ? 
        <ProductProvider>
          <AuthRouter />
        </ProductProvider>
       : 
        <UnauthRouter />
      }
    </div>
  );
}

export default App;
