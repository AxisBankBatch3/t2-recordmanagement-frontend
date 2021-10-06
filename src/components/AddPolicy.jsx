import { useState } from "react";
import FormData from "form-data";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AddPolicy = (props) => {
  const signInDetails = useSelector((state) => state.signInDetails);
  const { userInfo } = signInDetails;
  if (!userInfo) {
    props.history.push("/signin");
  }

  const [loop, setLoop] = useState(0);

  const [option, setOption] = useState("");
  const [mobile, setMobile] = useState("");
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [aadharNumber, setAddharNumber] = useState("");
  const [aadharDoc, setAadharDoc] = useState();
  const [panNumber, setPanNumber] = useState("");
  const [panDoc, setPanDoc] = useState();
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [policyNumberHealth, setPolicyNumberHealth] = useState("");

  const [qouteHealth, setQuoteHealth] = useState();
  const [medicalReport, setMedicalReport] = useState();

  const [policyNumberMotor, setPolicyNumberMotor] = useState("");
  const [qouteMotor, setQuoteMotor] = useState();
  const [rcDoc, setrcDoc] = useState();

  const insurance = new Object();
  const health = new Array();
  const motor = new Array();

  const submitHandler = (event) => {
    event.preventDefault();

    health.push({
      policyNumber: policyNumberHealth,
      quote: qouteHealth,
      medicalReport: medicalReport,
    });
    motor.push({
      policyNumber: policyNumberMotor,
      quote: qouteMotor,
      vehicleRCURL: rcDoc,
    });

    insurance.health = [...health];
    insurance.motor = [...motor];

    var formData = new FormData();

    formData.partnerId = "rty789";
    formData.clientName = clientName;
    formData.clientAddress = address;
    formData.pinCode = zipCode;
    formData.emailId = email;
    formData.mobile = mobile;
    formData.birthDate = dob;
    formData.aadharNumber = aadharNumber;
    formData.aadharURL = aadharDoc;
    formData.panCardNumber = panNumber;
    formData.panCardURL = panDoc;
    formData.policyNumber = policyNumberHealth;
    formData.insurance = insurance;

    console.log(formData);
  };

  return (
    <>
      <div class="container">
        <div className="row" style={{ paddingBlock: "1.5rem" }}>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="#">Partner</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Policy
              </li>
            </ol>
          </nav>
        </div>
        <div class="row">
          <div class="col-md-12 order-md-1">
            <h4 class="mb-3">Insurance Form</h4>
            <form
              class="needs-validation"
              novalidate=""
              onSubmit={submitHandler}
            >
              <div class="row" style={{ backgroundColor: "none" }}>
                <div class="col-md-3 mb-3">
                  <label for="firstName">Client Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  ></input>
                  <div class="invalid-feedback">
                    {" "}
                    Valid first name is required.{" "}
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="email">
                    Email <span class="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    {" "}
                    Please enter a valid email address for shipping updates.{" "}
                  </div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">DOB</label>
                  <input
                    type="date"
                    class="form-control"
                    id="cc-expiration"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback"> Expiration date required </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="inputState" class="form-label">
                    Insurance type
                  </label>
                  <select
                    id="inputState"
                    class="form-select"
                    onChange={(event) => setOption(event.target.value)}
                  >
                    <option>select</option>
                    <option value="Health">Health </option>
                    <option value="vehicle">vehicle </option>
                  </select>
                </div>
              </div>

              <div class="row"></div>
              {option === "Health" ? (
                <>
                  <br></br>
                  <div style={{ border: "2px solid green", padding: "15px" }}>
                    <div class="row">
                      <div class="col-md-12 mb-3">
                        <label for="firstName">Policy Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id=""
                          placeholder=""
                          value={policyNumberHealth}
                          onChange={(e) => {
                            setPolicyNumberHealth(e.target.value);
                          }}
                          required=""
                        ></input>
                        <div class="invalid-feedback">
                          {" "}
                          Valid first name is required.{" "}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-6">
                        <label for="formFile" class="form-label">
                          Upload Quote
                        </label>
                        <input
                          class="form-control"
                          type="file"
                          id="formFile"
                          onChange={(e) => setQuoteHealth(e.target.files[0])}
                        />
                      </div>
                      <div class="col-md-6 mb-6">
                        <label for="formFile" class="form-label">
                          Upload Medical Report
                        </label>
                        <input
                          class="form-control"
                          type="file"
                          id="formFile"
                          onChange={(e) => setMedicalReport(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    ></div>
                  </div>
                </>
              ) : option === "vehicle" ? (
                <>
                  <br></br>
                  <div style={{ border: "2px solid orange", padding: "15px" }}>
                    <div class="row">
                      <div class="col-md-12 mb-3">
                        <label for="firstName">Policy Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id=""
                          placeholder=""
                          value={policyNumberMotor}
                          onChange={(e) => {
                            setPolicyNumberMotor(e.target.value);
                          }}
                          required=""
                        ></input>
                        <div class="invalid-feedback">
                          {" "}
                          Valid first name is required.{" "}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-6">
                        <label for="formFile" class="form-label">
                          Upload Quote
                        </label>
                        <input
                          class="form-control"
                          type="file"
                          id="formFile"
                          onChange={(e) => setQuoteMotor(e.target.files[0])}
                        />
                      </div>
                      <div class="col-md-6 mb-6">
                        <label for="formFile" class="form-label">
                          Upload RC Document
                        </label>
                        <input
                          class="form-control"
                          type="file"
                          id="formFile"
                          onChange={(e) => setrcDoc(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    ></div>
                  </div>
                </>
              ) : null}

              <br></br>

              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="firstName">Aadhaar Number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="aadhar"
                    placeholder="xxxx-xxxx-xxxx"
                    value={aadharNumber}
                    onChange={(e) => setAddharNumber(e.target.value)}
                    required=""
                  ></input>
                  <div class="invalid-feedback">
                    {" "}
                    Valid first name is required.{" "}
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="lastName">Pan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="abc123xyz"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value)}
                    required=""
                  />
                  <div class="invalid-feedback">
                    {" "}
                    Valid last name is required.{" "}
                  </div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="zip">Mobile</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback"> Zip code required. </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback"> Zip code required. </div>
                </div>
              </div>
              <br></br>

              <div class="row">
                <div class="col-md-6 mb-6">
                  <label for="formFile" class="form-label">
                    Upload Aadhaar card
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setAadharDoc(e.target.files[0])}
                  />
                </div>
                <div class="col-md-6 mb-6">
                  <label for="formFile" class="form-label">
                    Upload Pan
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setPanDoc(e.target.files[0])}
                  />
                </div>
              </div>
              <br></br>

              <div class="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="1234 Main St"
                  required=""
                />
                <div class="invalid-feedback">
                  {" "}
                  Please enter your shipping address.{" "}
                </div>
              </div>

              <div class="row"></div>

              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={() => props.history.push("/home")}
                  style={{ margin: "5px" }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  style={{ margin: "5px" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
