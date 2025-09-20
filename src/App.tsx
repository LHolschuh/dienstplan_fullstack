import './App.css'
import Header from "./components/header.tsx";
import Button from "./components/buttonGroup.tsx";
import MultiSelectCalendar from "./components/calendar.tsx";

function App() {

  return (
    <>
       <Header />
        <Button/>
      <MultiSelectCalendar></MultiSelectCalendar>
    </>
  )
}

export default App
