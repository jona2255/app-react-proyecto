import { Navbar } from "react-bootstrap";

const NavbarHeader = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark d-none d-block navbar-zindex">
            <div className="container">
                <a className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/" rel="noreferrer">
                    <strong>ONGEITOR</strong>
                </a>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="#intro">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow noreferrer"
                                target="_blank">Listado ONG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank" rel="noreferrer">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Navbar>
    );
};
export default NavbarHeader;
