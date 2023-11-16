import { useEffect, useState } from "react"
import Loading from "./components/Loading"
import JobInfo from "./components/JobInfo"
import BtnContainer from "./components/BtnContainer"

const url = "https://course-api.com/react-tabs-project"

const App = () => {
  const [jobs, setjobs] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setjobs(data)
    }
    fetchData()
  }, [])
  const [currentItem, setCurrentItem] = useState(0)
  // console.log(jobs)
  return (
    <div className="jobs-center">
      <BtnContainer
        {...jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {jobs ? <JobInfo {...jobs} currentItem={currentItem} /> : <Loading />}
    </div>
  )
}
export default App
