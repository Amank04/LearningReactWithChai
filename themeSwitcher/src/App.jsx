import { useState, useEffect } from "react";
import { ThemeProvider } from "./Contexts/theme";
import Button from "./Components/Button"
import Card from "./Components/Card";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const darkTheme = () => {
    setthemeMode("dark");
  }
  const lightTheme = () => {
    setthemeMode("light");
  }

  useEffect(() => {
    const element = document.querySelector("html");
    element.classList.remove("dark", "light"); //remove dark or light, any if already available.

    element.classList.add(themeMode)
  }, [themeMode])
  

  return (
    <>
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
    </>
  );
}

export default App;
