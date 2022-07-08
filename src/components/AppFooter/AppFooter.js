import './AppFooter.scss';

function AppFooter () {
    return (
        <div>
            <hr />
            <div className="footer">
                © {new Date().getFullYear()} Anna Radchenko
            </div>
        </div>
    );
}

export default AppFooter;