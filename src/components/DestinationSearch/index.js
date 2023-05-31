// Write your code here

import './index.css'

const EachList = props => {
  const {destinationDetails} = props
  const {name, imageUrl} = destinationDetails

  return (
    <li className="container">
      <img src={imageUrl} className="img" alt="destinationsList" />
      <p className="name">{name}</p>
    </li>
  )
}

export default EachList
