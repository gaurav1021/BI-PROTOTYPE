// import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
//   import Nav from 'react-bootstrap/Nav';
//   import Navbar from 'react-bootstrap/Navbar';
//   import NavDropdown from 'react-bootstrap/NavDropdown';
  import './navbar.css';
  
//   function BasicExample() {
//     const xyz = {
//       'padding-left':'-1vw',
//       'dislay':'block'
//     }
//     const indv = {
//       'height':'25px',
//     }
//     const logoz = {
//       'height':'35px',
//       'width':'40vw'
//     }
//     // function sidebar(){
//     //   let togg = !sideBarToggler;
//     //   setSideBarToggler(togg);
//     //     let doc = document.getElementById("sidebarMenu");
//     //   if(!togg){
//     //     doc.display='none';
//     //   }
//     //   else{
//     //     doc.display='block';
//     //   }
//     // }
//     return (
//       <Navbar bg="light" expand="lg">
//         <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto" id="sidebarMenu" style={xyz} >
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   }
  
//   export default BasicExample;






























import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  const rowReverse = {
    'display':'flex',
    // 'flex-direction':'row-reverse !important'
    'flex-direction': 'row-reverse'
  }
  const xyz = {
    'padding-left':'-1vw',
    'dislay':'block'
  }
  const logoz = {
    'height':'7vw',
    'width':'50vw',
    'marginLeft':'3vw'
  }
  const marginLeftZero = {
    'marginLeft':'0px'
  }
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 ">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start" >
              <Offcanvas.Header className="sidebarHeading" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand href="#home"><img src="https://devclient.bondsindia.com/static/media/bilogo.870b6e7e.svg" alt="Company_Logo" style={logoz}/></Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}

                <div className="sideBarTopper">
                  <p className="YouCanInvestOn">You can invest on</p>
                  <div className="investOnStrip">
                      <img src="https://devclient.bondsindia.com/static/media/btm.672e4257.svg" alt="Bonds"/>
                      <img src="https://devclient.bondsindia.com/static/media/gsecm.9e4ca0a6.svg" alt="GSec Strips"/>
                      <img src="https://devclient.bondsindia.com/static/media/ipom.ddc4d113.svg" alt="IPO"/>
                  </div>
                </div>
                <div className="sidebarBody">
                <div className="oneSB">
                  <img src="https://devclient.bondsindia.com/static/media/user.912dc7c0.svg" alt="" />
                  My Profile
                </div>
                <hr/>
                <div className="twoSB">
                  <img src="https://devclient.bondsindia.com/static/media/mkyc.e898faff.svg" alt="" />
                  My KYC
                </div>
                <hr/>
                <div className="threeSB">
                  <img src="https://devclient.bondsindia.com/static/media/myrfq.6bcc5a7c.svg" alt="" />
                  My RFQ
                </div>
                <hr/>
                <div className="fourSB">
                  <img src="https://devclient.bondsindia.com/static/media/explorebonds.2d57929d.svg" alt="" />
                  Explore Bonds
                </div>
                <hr/>
                <div className="fiveSB">
                  <img src="https://devclient.bondsindia.com/static/media/marketW.39c97b9e.svg" alt="" />
                  Market Watch
                </div>
                <hr/>
                <div className="sixSB">
                  <img src="https://devclient.bondsindia.com/static/media/users.28d89fce.svg" alt="" />
                  Refer Friend
                </div>
                <hr/>
                <div className="sevenSB">
                  <img src="https://devclient.bondsindia.com/static/media/Knowledge_Centre.1ee41673.svg" alt="" />
                  Knowledge Center
                </div>
                <hr/>
                <div className="eightSB">
                  <img src="https://devclient.bondsindia.com/static/media/News_Insight.9d66be2f.svg" alt="" />
                  News & Insights
                </div>
                <hr/>
                </div>
                <div className="additionalSidebar">
                  <img src="https://devclient.bondsindia.com/static/media/NH.0048dd14.svg" alt="" />
                  <img src="https://devclient.bondsindia.com/static/media/AE.9a2acf8d.svg" alt="" />
                  <img src="https://devclient.bondsindia.com/static/media/PT.71212e95.svg" alt="" />
                  <img src="https://devclient.bondsindia.com/static/media/CB.fdf943ec.svg" alt="" />
                </div>
                <div className="tncSidebar">
                  <div className="linksSidebar">
                    <a href="http://tst.bondsindia.com/html_new_design/terms-and-conditions.html">Terms & Conditions</a>
                    <a href="http://tst.bondsindia.com/html_new_design/privacy.html">Privacy Policy</a>
                    <a href="http://tst.bondsindia.com/html_new_design/cookiepolicy.html">Cookie Policy</a>
                    <a href="http://tst.bondsindia.com/html_new_design/disclaimer.html">Disclaimer</a>
                  </div>
                </div>
                <div className="rightsSidebar">
                  All rights reserved.
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
             <Navbar.Brand href="#home" class="headLogo"  style={marginLeftZero}><img src="https://devclient.bondsindia.com/static/media/bilogo.870b6e7e.svg" alt="Company_Logo" style={logoz}/></Navbar.Brand>
             <div className="additionalinfo">
             <Navbar.Brand href="#home"><img src="https://devclient.bondsindia.com/static/media/bell.10d0f184.svg" alt="Company_Logo" className="indv"/></Navbar.Brand>
             <Navbar.Brand href="#home"><img src="https://client.bondsindia.com/static/media/search.9af3d084.svg" alt="Company_Logo" className="indv"/></Navbar.Brand>
             </div>
          </Container>
        </Navbar>
      ))}
      <div className="navbarDone">
        
      </div>
    </>
  );
}

export default OffcanvasExample;