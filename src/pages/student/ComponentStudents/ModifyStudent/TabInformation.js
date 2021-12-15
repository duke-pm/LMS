import {FormGroup, Label} from "reactstrap";
import React, {forwardRef,useState} from 'react'
import RUpload from "../../../../components/upload/ReactUpload";
import {Icon, RSelect} from "../../../../components/Component";
import {filterStatus} from "../../utils/UserData";
import DatePicker from "react-datepicker";
import Dropzone from "react-dropzone";
const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <div onClick={onClick} ref={ref}>
        <div className="form-icon form-icon-left">
            <Icon name="calendar"></Icon>
        </div>
        <input className="form-control date-picker" type="text" value={value} onChange={onChange} />
    </div>
));
const  TabInformation =(props)=>{
    const [startIconDate, setStartIconDate] = useState(new Date());
    const [files, setFiles] = useState([]);
    // handles ondrop function of dropzone
    const handleDropChange = (acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );
    };

    return(
        <div className="row profile__form">
            <div className="col-lg-2">
                <FormGroup>
                    <div className="form-control-wrap">
                        <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div
                                        {...getRootProps()}
                                        className="dropzone upload-zone small bg-lighter my-2 dz-clickable"
                                    >
                                        <input {...getInputProps()} />
                                        {files.length === 0 && <p className="text-center">Upload avatar</p>}
                                        {files.map((file) => (
                                            <div
                                                key={file.name}
                                                className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                                            >
                                                <div className="dz-image">
                                                    <img src={file.preview} alt="preview" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                </FormGroup>
            </div>
            <div className="col-lg-10 row g-3">
                <div className="col-lg-8">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-name">
                            ID Student
                        </Label>
                        <div className="form-control-wrap">
                            <input
                                ref={props.register({ required: true })}
                                type="text"
                                id="fv-full-name"
                                name="idStudent"
                                className="form-control"
                            />
                            {props.errors.idStudent && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-4">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-group">Group</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-group"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, group: e.value })}
                            />
                            {props.errors.group && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-8">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-first-name">
                            First name
                        </Label>
                        <div className="form-control-wrap">
                            <input
                                ref={props.register({ required: true })}
                                type="text"
                                id="fv-full-first-name"
                                name="name"
                                className="form-control"
                            />
                            {props.errors.name && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-4">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-last-name">
                            Last name
                        </Label>
                        <div className="form-control-wrap">
                            <input
                                ref={props.register({ required: true })}
                                type="text"
                                id="fv-full-last-name"
                                name="lastName"
                                className="form-control"
                            />
                            {props.errors.lastName && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-8">
                    <FormGroup>
                        <Label className="form-label">Birthday</Label>
                        <div className="form-control-wrap">
                            <div className="form-icon form-icon-left">
                                <Icon name="calendar"></Icon>
                            </div>
                            <DatePicker
                                selected={startIconDate}
                                className="form-control date-picker"
                                onChange={(value)=>console.log(value)}
                                customInput={<ExampleCustomInput />}
                            />
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-4">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-gender">Gender</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-gender"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, gender: e.value })}
                            />
                            {props.errors.gender && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
            </div>
            <div className="col-lg-12 row g-3">
                <div className="col-lg-12">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-company">Company</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-company"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                            />
                            {props.errors.company && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-6">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-phone">
                            Phone
                        </Label>
                        <div className="form-control-wrap">
                            <input
                                ref={props.register({ required: true })}
                                type="text"
                                id="fv-full-phone"
                                name="phone"
                                className="form-control"
                            />
                            {props.errors.phone && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-6">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-email">
                            Email
                        </Label>
                        <div className="form-control-wrap">
                            <input
                                ref={props.register({ required: true })}
                                type="text"
                                id="fv-full-email"
                                name="email"
                                className="form-control"
                            />
                            {props.errors.email && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-12">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-address">
                            Address
                        </Label>
                        <div className="form-control-wrap">
                            <input
                                ref={props.register({ required: true })}
                                type="text"
                                id="fv-full-address"
                                name="address"
                                className="form-control"
                            />
                            {props.errors.address && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-6">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-province">Province</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-province"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                            />
                            {props.errors.province && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-6">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-district">District</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-district"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                            />
                            {props.errors.district && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-6">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-job">Job</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-job"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                            />
                            {props.errors.job && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-6">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-favorit">Interest</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-favorit"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                            />
                            {props.errors.favorit && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-6">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-favorit">School</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-school"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                            />
                            {props.errors.school && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-6">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-class">Grade/Faculty</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-class"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                            />
                            {props.errors.class && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}
export  default  TabInformation