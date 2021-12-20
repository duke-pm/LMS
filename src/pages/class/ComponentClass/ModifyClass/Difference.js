import {FormGroup, Label} from "reactstrap";
import {filterStatus} from "../../utils/UserData";
import {RSelect} from "../../../../components/Component";
import React from "react";

const Difference = (props) => {
  return(
      <div className="row g-3">
          <div className="col-lg-4">
              <FormGroup>
                  <label className="form-label" htmlFor="fv-full-teacher">
                      Teacher
                  </label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-discount"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, source: e.value })}
                      />
                      {props.errors.teacher && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4 d-flex flex-row">
              <div>
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-salaryPayment1">Scale Salary</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-salaryPayment1"
                              name="salaryPayment1"
                              className="form-control"
                          />
                          {props.errors.salaryPayment1 && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
              <div className="ml-3">
                  <FormGroup>
                      <label className="form-label mt-3" htmlFor="fv-full-first-salaryPaymentValue1" />
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-salaryPaymentValue1"
                              name="salaryPaymentValue1"
                              className="form-control"
                          />
                          {props.errors.salaryPaymentValue1 && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
          </div>
          <div className="col-lg-4"/>
          <div className="col-lg-4">
              <FormGroup>
                  <label className="form-label" htmlFor="fv-full-mentor1">
                      Mentor 1
                  </label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-mentor1"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, saler: e.value })}
                      />
                      {props.errors.mentor1 && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4 d-flex flex-row">
              <div>
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-salaryPayment2">Scale Salary</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-salaryPayment2"
                              name="salaryPayment2"
                              className="form-control"
                          />
                          {props.errors.salaryPayment2 && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
              <div className="ml-3">
                  <FormGroup>
                      <label className="form-label mt-3" htmlFor="fv-full-first-salaryPaymentValue2" />
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-salaryPaymentValue2"
                              name="salaryPaymentValue2"
                              className="form-control"
                          />
                          {props.errors.salaryPaymentValue2 && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
          </div>
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label"  htmlFor="fv-full-first-teacherRadio">
                      Ratio
                  </Label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-teacherRadio"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, saler: e.value })}
                      />
                      {props.errors.teacherRadio && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label"  htmlFor="fv-full-first-mentor2">
                      Mentor 2
                  </Label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-mentor2"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, saler: e.value })}
                      />
                      {props.errors.mentor2 && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4 d-flex flex-row">
              <div>
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-salaryPayment3">Scale Salary</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-salaryPayment3"
                              name="salaryPayment3"
                              className="form-control"
                          />
                          {props.errors.salaryPayment3 && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
              <div className="ml-3">
                  <FormGroup>
                      <label className="form-label mt-3" htmlFor="fv-full-first-salaryPaymentValue3" />
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-salaryPaymentValue3"
                              name="salaryPaymentValue3"
                              className="form-control"
                          />
                          {props.errors.salaryPaymentValue3 && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
          </div>
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label"  htmlFor="fv-full-first-staff">
                     Class Admin
                  </Label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-staff"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, saler: e.value })}
                      />
                      {props.errors.staff && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
      </div>
  )
}
export  default Difference