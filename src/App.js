import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import TeacherPage from './Components/Teacher/TeacherPage/TeacherPage';
import StudentProfile from './Components/Student/StudentProfile/StudentProfile';
import ECE from './Components/ECE/ECE';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/teacher" element={<TeacherPage />} />
          <Route exact path="/student" element={<StudentProfile />} />
          <Route exact path="/ece" element={<ECE />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
