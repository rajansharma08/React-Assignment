import Topbar from "./components/Topbar";
import Row from "./components/Row";
import Table from "./components/Table";
import TitleRow from "./components/TitleRow";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <Topbar />
      <Row />

      <div className="flex-1 overflow-auto custom-scroll ">
        <Table />
      </div>

      <TitleRow />
    </div>
  );
}

export default App;
