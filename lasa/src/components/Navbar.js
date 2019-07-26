import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Navbar.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (

            <MDBNavbar  color="default-color" dark expand="md" id="eto">
            
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
              <MDBNavItem>
            {/* <MDBNavLink to="/register/:_id">listeProduit</MDBNavLink> */}
            <MDBNavLink to={"/register/"+localStorage.getItem('id')} className="premierButton">Mes Atelier</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/atelier" id="publocations"> Publier une Atelier</MDBNavLink>
          </MDBNavItem>
                
                <MDBNavItem>
                  <MDBDropdown>
                    
                    
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                
            
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="envelope" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!" onClick={this.onLogout.bind(this)}>Déconnecter</MDBDropdownItem>
                      
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          
        )
      const guestLinks = (

   <MDBNavbar  color="default-color" dark expand="md" id="eto">
            
   <MDBNavbarToggler onClick={this.toggleCollapse} />
   <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
     <MDBNavbarNav left>
     <MDBNavItem>
   <MDBNavLink to={"/register/"+localStorage.getItem('id')}>Acceuil</MDBNavLink>
 </MDBNavItem>
 
       
       <MDBNavItem>
         <MDBDropdown>
           
           
         </MDBDropdown>
       </MDBNavItem>
     </MDBNavbarNav>
     <MDBNavbarNav right>
       
     <MDBNavLink className="waves-effect waves-light" to="/login" >
              Connecter
            </MDBNavLink>
     </MDBNavbarNav>
   </MDBCollapse>
 </MDBNavbar>
     

      )
        return(
            
                
                <div  id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
           
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));