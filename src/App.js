// import logo from './logo.svg';

import './scss/app.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Routerweb from './Routerweb';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Nabbar from './layout/Nabbar';


function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <Nabbar></Nabbar>
      <div className="container App">
          {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
        <Routerweb/>
      </div>
        <div className="container App">
          {/* <Testcomponent/>
          <Table/>
          <AddRemoveInputField/>
          <Apitable/>
          <Formvalidation/> */}
         </div>
    </>
  );
}

export default App;
