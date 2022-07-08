import './AppFooter.scss';

function AppFooter () {
    return (
        <>
            <hr />
            <div className="footer">
                © {new Date().getFullYear()} Anna Radchenko
            </div>
        </>
    );
}

export default AppFooter;