import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGooglePlusG,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzon from "../Q-zone/Qzon";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="my-2" variant="outline-primary">
        <FaGooglePlusG></FaGooglePlusG> Login with google
      </Button>{" "}
      <Button variant="outline-secondary">
        {" "}
        <FaGithub></FaGithub> Login with github
      </Button>{" "}
      <div>
        <h3>Find Us On</h3>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzon></Qzon>
    </div>
  );
};

export default RightNav;
