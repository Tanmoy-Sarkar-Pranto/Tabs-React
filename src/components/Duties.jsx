import { FaArrowRight } from "react-icons/fa"

const Duties = (props) => {
  //   console.log(typeof props)
  const values = Object.values(props)
  //   console.log(values)
  return values.map((item, index) => {
    return (
      <div className="job-desc">
        <FaArrowRight className="job-icon" />
        <p key={index}>{item}</p>
      </div>
    )
  })
}
export default Duties
