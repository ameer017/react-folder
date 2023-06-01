import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = ({topic}) => {

    const topics = ['ReactJs', 'Javascript']

    // const listItems = topic.map((item, i) => <li><Link to ={`/news/${item}`}>{item}</Link></li>)

  return (
    <nav className="navBar">
    <div className="logo">
        <h1>DLT Africa News</h1>
        <small>...innovating through web3</small>
    </div>
    <ul className="navList">
        <li>
            <Link to ='/'>Home</Link>
        </li>

        {topics.map((list, i) => (
            <li key={i}>
                <Link to = {`/news/${list}`}>{list}</Link>
            </li>
        ))}
        {/* {listItems} */}
    </ul>
    </nav>
  )
}

export default Navbar