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
import ClassLecture from './Components/Teacher/ClassLecture/ClassLecture';
import { createContext, useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllTeacher from './Components/Dashboard/AllTeacher/AllTeacher';
import AllStudent from './Components/Dashboard/AllStudent/AllStudent';
import AddTeacher from './Components/Dashboard/AddTeacher/AddTeacher';
import AddStudent from './Components/Dashboard/AddStudent/AddStudent';
import Login from './Components/Login/LoginPage/Login';
import UserPermission from './Components/Dashboard/UserPermission/UserPermission';
import Notice from './Components/Notice/Notice';
import AddNotice from './Components/Dashboard/AddNotice/AddNotice';
import StudentLecture from './Components/Student/StudentLecture/StudentLecture';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ErrorPage from './Components/ErrorPage/ErrorPage';

export const host = 'http://192.168.137.32:8000';

export const userContext = createContext();
export const teacherContext = createContext();
export const studentContext = createContext();
export const lectureContext = createContext();
export const courseContext = createContext();
export const noticeContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [allNotice, setAllNotice] = useState([]);
  const [lectures, setLectures] = useState([])
  console.log(loginUser);

  // studentApi
  useEffect(() => {
    fetch(`${host}/student/`)
      .then(res => res.json())
      .then(data => setStudents(data))
  }, []);

  // teacherAPI
  useEffect(() => {
    fetch(`${host}/department/faculty/`)
      .then(res => res.json())
      .then(data => setTeachers(data))
  }, []);

  //noticeApi
  useEffect(() => {
    fetch(`${host}/notice`)
      .then(res => res.json())
      .then(data => setAllNotice(data))
  }, []);

  //lecture Api
  useEffect(() => {
    fetch(`${host}/lecture`)
      .then(res => res.json())
      .then(data => setLectures(data))
  }, []);


  return (
    <Router>
      <userContext.Provider value={[loginUser, setLoginUser]}>
        <teacherContext.Provider value={[teachers, setTeachers]}>
          <studentContext.Provider value={[students, setStudents]}>
            <noticeContext.Provider value={[allNotice, setAllNotice]}>
              <lectureContext.Provider value={[lectures, setLectures]}>
                <div className="App">
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/teacher" element={<TeacherPage />} />
                    <Route exact path="/student" element={<StudentProfile />} />
                    <Route exact path="/ece" element={<ECE />} />
                    <Route exact path="/classLecture" element={<ClassLecture />} />
                    <Route exact path="/notice" element={<Notice />} />
                    <Route exact path="/studentLecture" element={<StudentLecture />} />
                    <Route exact path="*" element={<ErrorPage />} />


                    {/* <Route exact path='dashboard/' element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/allTeacher" element={<AllTeacher />} />
                    <Route exact path="/allStudents" element={<AllStudent />} />
                    <Route exact path="/addTeacher" element={<AddTeacher />} />
                    <Route exact path="/addStudent" element={<AddStudent />} />
                    <Route exact path="/userPermission" element={<UserPermission />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/addNotice" element={<AddNotice />} />
                  </Routes>
                  {/* <div>
          <h3>{students.name}</h3>
          <img src={`http://192.168.137.32:8000${students.image}`} alt="" />
          <embed src={`http://192.168.137.32:8000${students.image}`} width="800px" height="2100px" />
          <iframe src={`http://192.168.137.32:8000${students.image}`}></iframe>
          <iframe src={`http://192.168.137.32:8000gview?url=https:/${students.images}&embedded=true`} style={{'width':'600px', 'height':'500px'}} frameborder="0"></iframe>
          <iframe src={`http://192.168.137.32:8000${students.image}`} style={{'width':'600px', 'height':'500px'}} frameborder="0"></iframe>
        </div> */}
                </div>
              </lectureContext.Provider>
            </noticeContext.Provider>
          </studentContext.Provider>
        </teacherContext.Provider>
      </userContext.Provider>

    </Router>
  );
}

export default App;
