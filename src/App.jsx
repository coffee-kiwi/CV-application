import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/GeneralInformation.jsx';
import Education from './components/Education.jsx'
import WorkExperience from './components/WorkExperience.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <GeneralInformation />
      <hr/>
      <Education />
      <hr/>
      <WorkExperience />
    </div>
  );
}

export default App
