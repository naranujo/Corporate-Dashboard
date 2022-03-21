import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './Style/app.css';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
