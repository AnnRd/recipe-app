import { NavLink } from 'react-router-dom';
import './AppHeader.scss';
function AppHeader () {
    return (
        <>
            <hr />
            <h1 className="app-header">Hungry? Here you can find what you want! <span className='emoji'>🥞 🥗 🍜</span></h1>
            <hr />
            
            <div className='navigation'>
                <div className="nav-link">
                    <NavLink to='/'>Home</NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to='/categories'>Categories</NavLink>
                </div>
                {/* <NavLink to='recipes'>Recipes</NavLink> */}
            </div>
        </>
        
    )
}

export default AppHeader;