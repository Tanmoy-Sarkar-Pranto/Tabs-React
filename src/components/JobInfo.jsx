import Duties from "./Duties"

const JobInfo = (props) => {
  const job = Object.values(props).filter(
    (item, index) => index == props.currentItem
  )
  // console.log(job)
  return (
    <div>
      <h3>{job[0].title}</h3>
      <h4 className="job-company">{job[0].company}</h4>
      <p className="job-date">{job[0].dates}</p>
      <Duties {...job[0].duties} />
    </div>
  )
}
export default JobInfo
