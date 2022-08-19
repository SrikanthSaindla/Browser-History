import './Histroy.css'

const History = props => {
  const {eachItem, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachItem

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list_Container">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="app logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={onDelete} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default History
