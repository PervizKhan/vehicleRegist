import { MainContent } from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div className='w-1/5 top-0 left-0'>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className='w-4/5'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
