
// import { color } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';

function Accordionne() {

  return (
    <Accordion>

      <Accordion.Item eventKey="0">
        <Accordion.Header>What Do I Need To Get Started?</Accordion.Header>
        <Accordion.Body>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
      <div className="gap-sm-below"></div>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{ color: "red" }}>How Do I Get Paid After Referring A Client?</Accordion.Header>
        <Accordion.Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
      <div className="gap-sm-below"></div>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How many People can i refer in a day?</Accordion.Header>
        <Accordion.Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
      <div className="gap-sm-below"></div>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Do I need a visa card to get paid?</Accordion.Header>
        <Accordion.Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>
      <div className="gap-sm-below"></div>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can i refer people to resellme for commission?</Accordion.Header>
        <Accordion.Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default Accordionne;
