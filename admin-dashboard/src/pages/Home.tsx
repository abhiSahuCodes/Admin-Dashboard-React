import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-container">
      <Link to='/admin/dashboard'><button type="button" className="primary-button">Visit Dashboard</button></Link>
    </div>
  )
}

export default Home
