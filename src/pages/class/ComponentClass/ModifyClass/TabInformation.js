import {FormGroup, Label} from "reactstrap";
import React, {forwardRef,useState} from 'react'
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
        <div className="row profile__form g-3">
                <div className="col-lg-4">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-classId">
                            ID Class
                        </Label>
                        <div className="form-control-wrap">
                            <input
                                ref={props.register({ required: true })}
                                type="text"
                                id="fv-full-classId"
                                name="classId"
                                className="form-control"
                            />
                            {props.errors.classId && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-4">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-shift">Shift</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-shift"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, group: e.value })}
                            />
                            {props.errors.shift && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-4">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-first-central">
                            Center
                        </Label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-central"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, group: e.value })}
                            />
                            {props.errors.central && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
            <div className="col-lg-4">
                <FormGroup>
                    <Label className="form-label">Date start</Label>
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
                        <Label className="form-label">Days</Label>
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
                        <label className="form-label" htmlFor="fv-full-first-type">Class Type</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-type"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, gender: e.value })}
                            />
                            {props.errors.type && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-4">
                    <FormGroup>
                        <Label className="form-label">Date end</Label>
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
                        <Label className="form-label">Time study</Label>
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
                        <Label className="form-label" htmlFor="fv-full-status">
                            Status
                        </Label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-status"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, gender: e.value })}
                            />
                            {props.errors.status && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-4">
                    <FormGroup>
                        <Label className="form-label" htmlFor="fv-full-room">
                            Room
                        </Label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-room"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, gender: e.value })}
                            />
                            {props.errors.room && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-4 d-flex flex-row">
                    <div className="">
                        <FormGroup>
                            <label className="form-label" htmlFor="fv-full-first-relax">Halftime break</label>
                            <div className="form-control-wrap">
                                <input
                                    ref={props.register({ required: true })}
                                    type="text"
                                    id="fv-full-relax"
                                    name="classId"
                                    className="form-control"
                                />
                                {props.errors.relax && <span className="invalid">This field is required</span>}
                            </div>
                        </FormGroup>
                    </div>
                    <div className="ml-3">
                        <FormGroup>
                            <label className="form-label" htmlFor="fv-full-first-time_ex">Per lession</label>
                            <div className="form-control-wrap">
                                <input
                                    ref={props.register({ required: true })}
                                    type="text"
                                    id="fv-full-time_ex"
                                    name="time_ex"
                                    className="form-control"
                                />
                                {props.errors.time_ex && <span className="invalid">This field is required</span>}
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <div className="col-lg-4">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-group">Class group</label>
                        <div className="form-control-wrap">
                            <RSelect
                                id="fv-full-first-group"
                                ref={props.register({ required: true })}
                                options={filterStatus}
                                onChange={(e) => props.setFormData({ ...props.formData, company: e.value })}
                            />
                            {props.errors.group && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
                <div className="col-lg-12">
                    <FormGroup>
                        <label className="form-label" htmlFor="fv-full-first-note">Conent</label>
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
                            {props.errors.note && <span className="invalid">This field is required</span>}
                        </div>
                    </FormGroup>
                </div>
        </div>
    )
}
export  default  TabInformation