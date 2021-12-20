import React from 'react'
import {FormGroup, Label} from "reactstrap";
import {OverlineTitle} from "../../../../components/text/Text";
import {filterStatus} from "../../utils/UserData";
import {RSelect} from "../../../../components/Component";
const Course = (props) => {
  return(
      <div className="row g-3">
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-show">
                      Show
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-show"
                          name="show"
                          className="form-control"
                      />
                      {props.errors.show && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4 d-flex flex-row">
              <div className="">
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-time">Durations(hrs)</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-time"
                              name="time"
                              className="form-control"
                          />
                          {props.errors.time && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
              <div className="ml-3">
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-week">Week</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-week"
                              name="week"
                              className="form-control"
                          />
                          {props.errors.week && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
          </div>
          <div className="col-lg-4 d-flex flex-row">
              <div className="">
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-studentMin">Min student</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-studentMin"
                              name="studentMin"
                              className="form-control"
                          />
                          {props.errors.studentMin && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
              <div className="ml-3">
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-studentMax">Max student</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-studentMax"
                              name="studentMax"
                              className="form-control"
                          />
                          {props.errors.studentMax && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
          </div>
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-level">
                      Level
                  </Label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-level"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                      />
                      {props.errors.level && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-classPrice">
                      School Fee
                  </Label>
                  <div className="form-control-wrap">
                      <input
                          ref={props.register({ required: true })}
                          type="text"
                          id="fv-full-classPrice"
                          name="classPrice"
                          className="form-control"
                      />
                      {props.errors.classPrice && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-courseTemplate">
                      Course Template
                  </Label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-courseTemplate"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                      />
                      {props.errors.courseTemplate && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-classBefore">
                      Previous Class
                  </Label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-classBefore"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                      />
                      {props.errors.classBefore && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-4 d-flex flex-row">
              <div className="">
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-priceTime">Fee Hour</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-priceTime"
                              name="priceTime"
                              className="form-control"
                          />
                          {props.errors.priceTime && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
              <div className="ml-3">
                  <FormGroup>
                      <label className="form-label" htmlFor="fv-full-first-priceEx">Fee Lession</label>
                      <div className="form-control-wrap">
                          <input
                              ref={props.register({ required: true })}
                              type="text"
                              id="fv-full-priceEx"
                              name="studentMax"
                              className="form-control"
                          />
                          {props.errors.priceEx && <span className="invalid">This field is required</span>}
                      </div>
                  </FormGroup>
              </div>
          </div>
          <div className="col-lg-4">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-full-discount">
                     Default discount
                  </Label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-discount"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                      />
                      {props.errors.discount && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
      </div>
  )
}
export  default Course