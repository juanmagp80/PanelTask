import { useState } from "react";
import "./App.css";

import { Menu, NextUIProvider } from "@nextui-org/react";

import ResponsiveAppBar from "./components/MenuHeader";
import Header from "./components/MenuHeader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NextUIProvider>
        <div>
          <Header />
        </div>
      </NextUIProvider>
    </>
  );
}

export default App;
