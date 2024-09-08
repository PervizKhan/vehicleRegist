import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div className='w-2/5 md:w-1/5'>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className='w-3/5 md:w-4/5'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
