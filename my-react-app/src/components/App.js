// File Name: App.js

import React, { useState, useLayoutEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

function App(props) {
  const [electiveNo, setElectiveNo] = useState(0);
  const [mainNo, setMainNo] = useState(0);
  const [labNo, setLabNo] = useState(0);
  const [phase2, setPhase2] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Container>
        <Nav />
        <h1>VTU CALCULATOR</h1>
        <p>Studying in a VTU college? Get your SGPA and CGPA scores here!</p>
        <h5>SGPA Calculator</h5>
        <Form className='form'>
          <Form.Group className='group'>
            <Form.Label>Number of Electives</Form.Label> <br />
            <Form.Control className='input'
              name="electiveNo"
              type="number"
              min="0"
              max="6"
              required
              onChange={(e) => setElectiveNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='group'>
            <Form.Label className='label'>Number of Main Subjects</Form.Label> <br />
            <Form.Control className='input'
              name="mainNo"
              type="number"
              min="0"
              max="6"
              required
              onChange={(e) => setMainNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='group'>
            <Form.Label className='label'>Number of Labs (+ Project Phase 1 + Seminars + Internship)</Form.Label> <br />
            <Form.Control className='input'
              name="labNo"
              type="number"
              min="0"
              max="3"
              required
              onChange={(e) => setLabNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='group'>
            <Form.Check
              style={{ fontWeight: "bold" }}
              checked={phase2}
              onChange={() => setPhase2(!phase2)}
              type="checkbox"
              label="Project Phase 2?"
            />
          </Form.Group> <br />
          <Link className='link'to={{
            pathname: '/sgpa',
            state: {
              electiveNo,
              mainNo,
              labNo,
              phase2No: phase2 ? 1 : 0
            }
          }}>
            <Button className="proceed">
              Proceed
            </Button>
          </Link>
          <p
            onClick={() => props.history.push('/cgpa')}
            style={{ textAlign: 'center', marginTop: 10, color: '#6FBEDB' }}>
            Calculate CGPA here!
          </p>
        </Form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
