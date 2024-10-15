import Main from "./components/Main/Main";
import MyAgGrid from "./MyAgGrid";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Main/Home";
import ChatPage from "./components/Main/ChatPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// const App = () => {
//   return (
//     <>
//       {/* <Sidebar /> */}
//       <Main  />
//     </>
//   )
// }

// export default App

const App = () => {
  return (
    <>
    <Router>
      <Routes>
  
        <Route path="/" element={<ChatPage />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App