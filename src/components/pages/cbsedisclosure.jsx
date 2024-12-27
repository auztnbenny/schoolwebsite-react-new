import React from 'react';
import './cbsedisclosure.css';
// Correct the import paths for Newsletter and Footer components
import Newsletter from '../Newsletter';
import Footer from '../Footer';

const CBSE = () => {
  return (
    <>
      {/* Inner Heading Start */}
      <div className="innerHeading-wrap">
        <div className="container">
          <h1>Cbse-Disclosure</h1>
        </div>
      </div>
      {/* Inner Heading End */}

      {/* Inner Content Start */}
      <div className="innerContent-wrap">
        <div className="container">
          <div className="blog_inner bloggridWrp">
            <div className="row">
              <div className="col-lg-8">
                <div className="class_left">
                  <h3 className="section-title">A: General Information</h3>
                  <hr className="section-divider" />
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>School</th>
                          <th>Affiliation</th>
                          <th>School Code</th>
                          <th>Address</th>
                          <th>Principal</th>
                          <th>Mail</th>
                          <th>Contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Saint Arnold's School</td>
                          <td>Applied</td>
                          <td>-</td>
                          <td>At PO. Khatnagar, PO. Belda, Dist. Paschim Medinipur, State - West Bengal, PIN - 721451</td>
                          <td>Fr. Naveen Prashanth Pinto, B.A., B.Ed.</td>
                          <td>sassalajpur@gmail.com</td>
                          <td>+91 9438821255</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="section-title">B: Staff (Teaching)</h3>
                  <hr className="section-divider" />
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Sl No</th>
                          <th>Principal</th>
                          <th>Total Teachers</th>
                          <th>PGT</th>
                          <th>TGT</th>
                          <th>PRT</th>
                          <th>Special Educator</th>
                          <th>Counsellor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>18</td>
                          <td>-</td>
                          <td>15</td>
                          <td>3</td>
                          <td>-</td>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="section-title">C: Infrastructure (School)</h3>
                  <hr className="section-divider" />
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Total Campus Area (Sq Mtr)</th>
                          <th>No and Size of Class Room (Sq Mtr)</th>
                          <th>No and Size of Laboratories (Sq Mtr)</th>
                          <th>Internet Facilities</th>
                          <th>No of Girls Toilets</th>
                          <th>No of Boys Toilets</th>
                          <th>YouTube Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>151793</td>
                          <td>32x</td>
                          <td>Phy: , Bio: , Chem: , Comp: </td>
                          <td>Yes</td>
                          <td>36</td>
                          <td>16</td>
                          <td><a href="https://www.youtube.com/@saintarnoldschool">SAINT ARNOLD'S SCHOOL</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="section-title">D: Documents and Informations</h3>
                  <hr className="section-divider" />
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Sl No</th>
                          <th>Documents / Information</th>
                          <th>Upload Document</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Copy of Society's Registration Certificate.</td>
                          <td><a href="https://www.arnoldschoolsalajpur.in/cbsedisclosure/societysregistration.pdf" target="_blank">View Document</a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Copy of NOC (No Objection Certificate) issued by the state government.</td>
                          <td><a href="cbsedisclosure/societysregistration.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Copy of the building safety certificate as per the national building code.</td>
                          <td><a href="cbsedisclosure/buildingstabilitycertificate.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Copy of valid fire safety certificate issued by the competent authority.</td>
                          <td><a href="cbsedisclosure/firesafety.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Copies of valid water, health and sanitation certificate.</td>
                          <td><a href="cbsedisclosure/healthandsanitationcertificate.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>List of school management committee.</td>
                          <td><a href="cbsedisclosure/managementcommittee.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Annual Academic Calendar.</td>
                          <td><a href="cbsedisclosure/societysregistration.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Details of Fee Structure.</td>
                          <td><a href="cbsedisclosure/societysregistration.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>List of Parents Teachers Association (PTA) Members.</td>
                          <td><a href="cbsedisclosure/societysregistration.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>Copy of recognition under RTE ACT 2009 (COR)</td>
                          <td><a href="cbsedisclosure/societysregistration.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>Self Certification Proforma.</td>
                          <td><a href="cbsedisclosure/societysregistration.pdf" target="_blank">View</a></td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>Mandatory public disclosure.</td>
                          <td><a href="cbsedisclosure/societysregistration.pdf" target="_blank">View</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Inner Content End */}

      {/* Newsletter Start */}
      <Newsletter />
      {/* Newsletter End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default CBSE;

