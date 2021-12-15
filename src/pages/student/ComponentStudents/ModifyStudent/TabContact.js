import React from 'react'
import {FormGroup, Label} from "reactstrap";
import {OverlineTitle} from "../../../../components/text/Text";
const TabContact = (props) => {
  return(
      <div className="row profile__form g-3">
          <div className="col-lg-12">
              <OverlineTitle  tag="span" className="preview-title-lg preview-title-primary">
                  Contact
              </OverlineTitle>
          </div>
          <div className="col-lg-12">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-nameContact">
                      Contact
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-nameContact"
                          name="nameContact"
                          className="form-control"
                      />
                      {props.errors.nameContact && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-phoneContact">
                      Contact
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-phoneContact"
                          name="phoneContact"
                          className="form-control"
                      />
                      {props.errors.phoneContact && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-emailContact">
                      Email
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-emailContact"
                          name="emailContact"
                          className="form-control"
                      />
                      {props.errors.emailContact && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-12">
              <hr className="preview-hr"></hr>
          </div>
          <div className="col-lg-12">
              <OverlineTitle tag="span" className="preview-title-lg preview-title-primary">
                  Protector
              </OverlineTitle>
          </div>
          <div className="col-lg-12">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-nameParent">
                      Name father
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-nameParent"
                          name="nameParent"
                          className="form-control"
                      />
                      {props.errors.nameParent && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-phoneParent">
                      Phone
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-phoneParent"
                          name="phoneParent"
                          className="form-control"
                      />
                      {props.errors.phoneParent && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-emailParent">
                      Email
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-emailParent"
                          name="emailParent"
                          className="form-control"
                      />
                      {props.errors.emailParent && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-12">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-nameMother">
                      Name mother
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-nameMother"
                          name="nameMother"
                          className="form-control"
                      />
                      {props.errors.nameMother && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-phoneMother">
                      Phone
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-phoneMother"
                          name="phoneMother"
                          className="form-control"
                      />
                      {props.errors.phoneMother && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-emailMother">
                     Email
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-emailMother"
                          name="emailMother"
                          className="form-control"
                      />
                      {props.errors.emailMother && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
      </div>
  )
}
export  default TabContact