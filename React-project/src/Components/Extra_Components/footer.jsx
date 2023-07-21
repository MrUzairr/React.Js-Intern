import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="#" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                E-COMMERCE STORE
              </h6>
              <p>
                At Our Ecommerce Store, we are passionate about providing
                exceptional products and an unparalleled shopping experience. We
                strive to offer a curated selection of high-quality items that
                meet the diverse needs and tastes of our valued customers.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  <Link to="/" className='footerTags'>Home</Link>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <Link to="/product" className='footerTags'>Product</Link>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <Link to="/cart" className='footerTags'>Cart</Link>                  
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <Link to="/contact" className='footerTags'>Contact</Link>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#" className="text-reset footerTags">
                  Facebook
                </a>
              </p>
              <p>
                <a href="#" className="text-reset footerTags">
                  Twitter
                </a>
              </p>
              <p>
                <a href="#" className="text-reset footerTags">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#" className="text-reset footerTags">
                  Linkedin
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 footerTag"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        E-Commerce Store
        </a>
      </div>
    </MDBFooter>
  );
}
