import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eventimage from "../../assets/img/event-image.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const DashBoard = () => {
  const products = ["", "", "", "", "", "", "", "", "", ""];
  return (
    <>
      <div className="main-dashboard">
        <div className="dashboard-wrapper">
          <div className="main-event">
            <Container>
              <div className="event-tab">
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Home">
                    Tab content for Home
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                  </Tab>
                  <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                  </Tab>
                </Tabs>
              </div>
              <Row>
                {products.map((item, index) => {
                  return (
                    <Col lg={3} key={index}>
                      <div className="event-card">
                        <div className="event-image">
                          <img src={eventimage} alt="" />
                        </div>
                        <div className="event-card-details">
                          <h3>Private room in farm stay in Sojitra, India</h3>
                          <p>67 kilometres away</p>
                          <p>15–20 Oct</p>
                          <h6 className="price">
                            ₹49,772 <span>Night</span>
                          </h6>
                        </div>
                      </div>
                    </Col>
                  );
                })}

              
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
