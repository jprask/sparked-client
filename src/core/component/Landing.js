import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'
import Button from 'react-rainbow-components/components/Button'
import { Row, Col } from 'react-flexbox-grid'

function Landing() {
  return (
    <>
      <div className="bg"></div>
      <div className="flex-container">
        <h1
          style={{
            fontSize: '4em',
            color: 'teal',
            fontWeight: 'bold',
          }}
        >
          Welcome To SparkEd V3
        </h1>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                <Button variant="base">
                  <Link
                    style={{
                      fontWeight: 'bold',
                      textDecoration: 'none',
                    }}
                    to="/login"
                  >
                    Get Started
                  </Link>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Landing
