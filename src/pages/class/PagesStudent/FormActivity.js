import React, {useState} from "react";
import {useForm} from "react-hook-form";
import classNames from "classnames";
import {Form, FormGroup, Label} from "reactstrap";
import {filterStatus} from "../utils/UserData";
import {Button, RSelect} from "../../../components/Component";
const FormActivity = () => {
  const [formData,setFormData] = useState({
    purpose:null,
    class:null,
    note:'',
    form:null,
    type:null,
    reason:null,
    classify:null,
    status:null
  })
  const formClass = classNames({
    "form-validate": true,
    "is-alter": 'alter',
  });
  const { errors, register, handleSubmit } = useForm();
  const onFormSubmit = () => {

  }
  return(
      <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
        <div className="row g-3 p-2">
          <div className="col-lg-12">
            <FormGroup>
              <Label className="form-label" htmlFor="fv-full-purpose">
                Purpose
              </Label>
              <div className="form-control-wrap">
                <RSelect
                    id="fv-full-first-purpose"
                    ref={register({ required: true })}
                    options={filterStatus}
                    onChange={(e) => setFormData({ ...formData, purpose: e.value })}
                />
                {errors.purpose && <span className="invalid">This field is required</span>}
              </div>
            </FormGroup>
          </div>
          <div className="col-lg-12">
            <FormGroup>
              <Label className="form-label" htmlFor="fv-full-class">
                Class
              </Label>
              <div className="form-control-wrap">
                <RSelect
                    id="fv-full-first-class"
                    ref={register({ required: true })}
                    options={filterStatus}
                    onChange={(e) => setFormData({ ...formData, class: e.value })}
                />
                {errors.class && <span className="invalid">This field is required</span>}
              </div>
            </FormGroup>
          </div>
          <div className="col-lg-12">
            <FormGroup>
              <Label className="form-label" htmlFor="fv-full-note">
                Note
              </Label>
              <div className="form-control-wrap">
                 <textarea
                     ref={register({
                       required: true,
                     })}
                     type="textarea"
                     className="form-control textarea-auto"
                     id="fv-note"
                     name="note"
                 />
                {errors.class && <span className="invalid">This field is required</span>}
              </div>
            </FormGroup>
          </div>
          <div className="col-lg-12">
            <FormGroup>
              <Label className="form-label" htmlFor="fv-full-form">
                Format
              </Label>
              <div className="form-control-wrap">
                <RSelect
                    id="fv-full-first-form"
                    ref={register({ required: true })}
                    options={filterStatus}
                    onChange={(e) => setFormData({ ...formData, form: e.value })}
                />
                {errors.form && <span className="invalid">This field is required</span>}
              </div>
            </FormGroup>
          </div>
          <div className="col-lg-12">
            <FormGroup>
              <Label className="form-label" htmlFor="fv-full-type">
                Type
              </Label>
              <div className="form-control-wrap">
                <RSelect
                    id="fv-full-first-type"
                    ref={register({ required: true })}
                    options={filterStatus}
                    onChange={(e) => setFormData({ ...formData, type: e.value })}
                />
                {errors.type && <span className="invalid">This field is required</span>}
              </div>
            </FormGroup>
          </div>
          <div className="col-lg-12">
            <FormGroup>
              <Label className="form-label" htmlFor="fv-full-reason">
                Reason
              </Label>
              <div className="form-control-wrap">
                <RSelect
                    id="fv-full-first-reason"
                    ref={register({ required: true })}
                    options={filterStatus}
                    onChange={(e) => setFormData({ ...formData, reason: e.value })}
                />
                {errors.reason && <span className="invalid">This field is required</span>}
              </div>
            </FormGroup>
          </div>
          <div className="col-lg-12">
            <FormGroup>
              <Label className="form-label" htmlFor="fv-full-classify">
                Classify
              </Label>
              <div className="form-control-wrap">
                <RSelect
                    id="fv-full-first-classify"
                    ref={register({ required: true })}
                    options={filterStatus}
                    onChange={(e) => setFormData({ ...formData, classify: e.value })}
                />
                {errors.classify && <span className="invalid">This field is required</span>}
              </div>
            </FormGroup>
          </div>
          <div className="col-lg-12">
            <FormGroup>
              <Label className="form-label" htmlFor="fv-full-status">
                Status
              </Label>
              <div className="form-control-wrap">
                <RSelect
                    id="fv-full-first-status"
                    ref={register({ required: true })}
                    options={filterStatus}
                    onChange={(e) => setFormData({ ...formData, status: e.value })}
                />
                {errors.status && <span className="invalid">This field is required</span>}
              </div>
            </FormGroup>
          </div>
          <div className="col-lg-12 d-flex flex-row justify-content-end">
            <Button color="primary" size="md" type="submit">
              Save
            </Button>
          </div>
        </div>
      </Form>
  )
}
export  default FormActivity