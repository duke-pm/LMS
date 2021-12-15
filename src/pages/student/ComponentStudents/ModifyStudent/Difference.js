import {FormGroup, Label} from "reactstrap";
import {filterStatus} from "../../utils/UserData";
import {RSelect} from "../../../../components/Component";
import React from "react";

const Difference = (props) => {
  return(
      <div className="row g-3">
          <div className="col-lg-6">
              <FormGroup>
                  <label className="form-label" htmlFor="fv-full-source">
                      Source
                  </label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-group"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, source: e.value })}
                      />
                      {props.errors.source && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <label className="form-label" htmlFor="fv-full-status">
                      Status
                  </label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-group"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, status: e.value })}
                      />
                      {props.errors.status && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <label className="form-label" htmlFor="fv-full-saler">
                      Counselor
                  </label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-group"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, saler: e.value })}
                      />
                      {props.errors.saler && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-6">
              <FormGroup>
                  <label className="form-label" htmlFor="fv-full-central">
                      Center
                  </label>
                  <div className="form-control-wrap">
                      <RSelect
                          id="fv-full-first-group"
                          ref={props.register({ required: true })}
                          options={filterStatus}
                          onChange={(e) => props.setFormData({ ...props.formData, central: e.value })}
                      />
                      {props.errors.central && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
          <div className="col-lg-12">
              <FormGroup>
                  <Label className="form-label" htmlFor="fv-message">
                      Note
                  </Label>
                  <div className="form-control-wrap">
                <textarea
                    ref={props.register({
                        required: true,
                    })}
                    type="textarea"
                    className="form-control form-control-sm"
                    id="fv-message"
                    name="note"
                />
                      {props.errors.message && <span className="invalid">This field is required</span>}
                  </div>
              </FormGroup>
          </div>
      </div>
  )
}
export  default Difference