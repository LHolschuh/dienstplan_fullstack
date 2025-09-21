import './App.css'
import Header from "./components/header.tsx";
import MultiSelectCalendar from "./components/calendar.tsx";
import IconLabelButtons from "./components/buttonGroup.tsx";

function App() {

  return (
    <>
       <Header />
        <IconLabelButtons onClick={function(): void {
              throw new Error("Function not implemented.");
          } }/>
      <MultiSelectCalendar onClick={function(): void {
              throw new Error("Function not implemented.");
          } } customizedButtonOnClick={function(): void {
              throw new Error("Function not implemented.");
          } }></MultiSelectCalendar>

    </>
  )
}

export default App
