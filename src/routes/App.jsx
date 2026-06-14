import "./../styles/main.css"
import Header from "../components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main" style={{flexGrow: 1}}>Content</div>
    </>
  )
}

export default App;