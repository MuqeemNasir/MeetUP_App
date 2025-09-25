import { useState } from 'react';
import { FaSearch} from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({onSearch}) => {
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/')    
    setTimeout(() => {
      onSearch(inputValue.toLowerCase())
    }, 0);
    setInputValue("")
  }

  const handleLogoClick = () => {
    navigate('/')
    onSearch('')
  }

  return(
  <header className="bg-light py-3">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-9">
          <NavLink to="/" onClick={handleLogoClick} className="navbar-brand" style={{ fontFamily: "'Pacifico', cursive", fontSize: '32px', color: '#f64060', cursor: "pointer" }}>MeetUP</NavLink>
        </div>
        <div className="col-md-auto text-end">
          <div className="input-group input-group-sm">
            <button className="input-group-text bg-white border-end-0 px-2" onClick={handleSearch} style={{cursor: "pointer"}}>
              <FaSearch style={{color: "#6c757d", fontSize: "0.85rem"}} />
            </button>
            <input
            type="search"
            className="form-control border-start-0 text-muted"
            placeholder="Search by title and tags..."
            aria-label="Search"
            style={{ borderRadius: '0.375rem', fontSize: "0.875rem", padding: "0.4rem 0.1rem" }}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") handleSearch()
            }}
          />
          </div>
        </div>
      </div>
      <hr />
    </div>
  </header>
  )
};

export default Header;
