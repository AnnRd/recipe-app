import './MainPage.scss';
import { Helmet } from 'react-helmet';

function MainPage() {
    return (
        <div className='container'>
             <Helmet>
                <meta
                    name="description"
                    content="Recipe App"
                    />
                <title>Recipe App - find what you want</title>
            </Helmet>
            <div className="emo">
                <div className="left-emoji">🍔</div>
                <div className="left-emoji">🍤</div>
                <div className="left-emoji">🍩</div>
                <div className="left-emoji">🧁</div>
                <div className="left-emoji">🍝</div>
                <div className="left-emoji">🥨</div>
                {/* <div className="left-emoji">🍲</div> */}
            </div>
            
            <div className="info">
                This app can help you to find the dish to cook today, even if you don`t know what you want. <br />
                Just check up the categories and choose anything you like! <span>👆</span>
            </div>

            <div className="emo">
                <div className="right-emoji">🧁</div>
                <div className="right-emoji">🍝</div>
                <div className="right-emoji">🥨</div>
                <div className="right-emoji">🍔</div>
                <div className="right-emoji">🍤</div>
                <div className="right-emoji">🍩</div>
                {/* <div className="right-emoji">🥮</div> */}
            </div>
        </div>
    )
}

export default MainPage;