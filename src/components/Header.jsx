import React from 'react'
import { Container} from 'react-bootstrap'

const Header = () => {
  return (
    <Container>
      <div className="header pt-2 mt-3">
         {/* brand */}
        <div className="brand text-center">
        <h3> Expensive <strong>Kobo</strong></h3>
        </div>
          {/* navigation */}
          <nav className="nav font-weight-bold">
            <div className="row">
              <div className="col">
                <p>Tracker</p>
              </div>
              <div className="col">
                <p>WishList</p>
              </div>
              <div className="col">
                <p>Goals</p>
              </div>
            </div>
          </nav>
      </div>
    </Container>
  )
}

export default Header
