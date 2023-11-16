const BtnContainer = (props) => {
  const buttons = Object.values(props)
  //   console.log(buttons)
  return (
    <div className="btn-container">
      {buttons.map((item, index) => {
        return (
          <button
            onClick={() => props.setCurrentItem(index)}
            key={index}
            className="job-btn"
          >
            {item.company}
          </button>
        )
      })}
    </div>
  )
}
export default BtnContainer
