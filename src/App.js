// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Testcomponent from './Testcomponent';
import Table from './Table';
import AddRemoveInputField from './AddRemoveInputField';
import Apitable from './Apitable';

function App() {
  return (
    <div className="container App">
      <Testcomponent/>
      <Table/>
      <AddRemoveInputField/>
      <Apitable/>
    </div>
  );
}

export default App;
