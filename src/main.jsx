import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import FetchingTester from "./FetchingTester.jsx"
import Header from "./components/Header.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchingTester />
    <Header />
  </StrictMode>,
)
