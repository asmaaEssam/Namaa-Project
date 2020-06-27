
import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/style.css'
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons"

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
    };
  }
  componentDidMount() {
    console.log(this.props)
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info",
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out",
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: "",
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
              {(localStorage.getItem('token'))?
              <NavItem>
              <Link to={"/home"}>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="primary"
                  target="_blank"
                  onClick={()=>{localStorage.removeItem('token')
                  localStorage.removeItem('role')
                  }}
                >
                 Logout
                </Button>
              </Link>
            </NavItem>: 
             <NavItem>
             <Link to={"/login"}>
               <Button
                 className="nav-link d-none d-lg-block"
                 color="secondery"
                 target="_blank"
               >
                Login
               </Button>
             </Link>
           </NavItem>}
              {(localStorage.getItem('token') && localStorage.getItem('role') === "Admin")? 
                <NavLink tag={Link} to="/admin/projects" activeClassName = 'active'>
                  Projects
                </NavLink>: null
               }
               {(localStorage.getItem('token') && localStorage.getItem('role') === "Admin")? 
                <NavLink tag={Link} to="/admin/departments">
                  Departments
                </NavLink>: null
               }
               {(localStorage.getItem('token') && localStorage.getItem('role') === "DataEntry")? 
              
                <NavLink tag={Link} to="/project" className="inactive" activeClassName="active">
                  Public Transport
                </NavLink> : null
               }
               {(localStorage.getItem('token') && localStorage.getItem('role') === "DataEntry")? 
                <NavLink tag={Link} to="/project" className="inactive" activeClassName="active">
                  Footpath & Cycleway
                </NavLink>: null
               }
               {(localStorage.getItem('token') && localStorage.getItem('role') === "DataEntry")? 
                <NavLink tag={Link} to="/project" className="inactive" activeClassName="active">
                  Storm water
                </NavLink>: null
               }
               {(localStorage.getItem('token') && localStorage.getItem('role') === "DecisionMaker")? 
                <NavLink tag={Link} to="/project">
                  Public Transport
                </NavLink>: null
               }
               {(localStorage.getItem('token') && localStorage.getItem('role') === "DecisionMaker")? 
                <NavLink tag={Link} to="/project">
                  Footpath & Cycleway
                </NavLink>: null
               }
               {(localStorage.getItem('token') && localStorage.getItem('role') === "DecisionMaker")? 
                <NavLink tag={Link} to="/project">
                  Storm water
                </NavLink>: null
               }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
