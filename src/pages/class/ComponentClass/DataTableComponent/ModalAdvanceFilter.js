import {DropdownMenu, DropdownToggle, FormGroup, UncontrolledDropdown} from "reactstrap";
import {Button, Col, Icon, Row, RSelect} from "../../../../components/Component";
import {filterRole, filterStatus} from "../../utils/UserData";
import React,{forwardRef,useState} from "react";
import DatePicker from "react-datepicker";
const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <div onClick={onClick} ref={ref}>
        <div className="form-icon form-icon-left">
            <Icon name="calendar"></Icon>
        </div>
        <input className="form-control date-picker" type="text" value={value} onChange={onChange} />
    </div>
));
const  ModalAdvanceFilter =(props)=>{
    const [startIconDate, setStartIconDate] = useState(new Date());

    return(
        <UncontrolledDropdown isOpen={props.modalFilter} onToggle={props.toggleFilters}>
            <DropdownToggle color="tranparent" className="btn btn-trigger btn-icon dropdown-toggle">
                <Icon name="filter"></Icon>
            </DropdownToggle>
            <DropdownMenu right className="dropdown-menu-xxl">
                <div className="dropdown-head f-flex flex-column">
                    <span className="sub-title dropdown-title">Filter Class</span>
                    <span className="small">Search class by condition below</span>
                </div>
                <div className="dropdown-body dropdown-body-rg">
                    <Row className={'gx-6 gy-3'}>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">School</label>
                                <RSelect options={filterRole} placeholder="Any School" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Date start</label>
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
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Show</label>
                                <RSelect options={filterStatus} placeholder="Any show" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className={'gx-6 gy-3'}>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Code</label>
                                <RSelect options={filterRole} placeholder="Any Code" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Date end</label>
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
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Level</label>
                                <RSelect options={filterStatus} placeholder="Any Level" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className={'gx-6 gy-3'}>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Class Type</label>
                                <RSelect options={filterRole} placeholder="Class Type" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Shift</label>
                                <RSelect options={filterStatus} placeholder="Any shift" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Teacher</label>
                                <RSelect options={filterStatus} placeholder="Any teacher" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className={'gx-6 gy-3'}>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Status</label>
                                <RSelect options={filterRole} placeholder="Any status" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Room</label>
                                <RSelect options={filterStatus} placeholder="Any room" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Class admin</label>
                                <RSelect options={filterStatus} placeholder="Class admin" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className={'gx-6 gy-3'}>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Class Group</label>
                                <RSelect options={filterRole} placeholder="Class Group" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Previous class</label>
                                <RSelect options={filterStatus} placeholder="Previous class" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Rate</label>
                                <RSelect options={filterStatus} placeholder="Any rate" />
                            </FormGroup>
                        </Col>
                        <Col size="12" className={'d-flex justify-content-end'}>
                            <li className='px-3'>
                                <Button color="light" outline className="btn-white" onClick={props.toggleFilters}>
                                    <span>{'Cancel'}</span>
                                </Button>
                            </li>
                            <li>
                                <Button color="primary" className="btn-primary">
                                    <Icon name="filter"></Icon>
                                    <span>{'Filter'}</span>
                                </Button>
                            </li>
                        </Col>
                    </Row>
                </div>
                <div className="dropdown-foot between">
                    <a
                        href="#reset"
                        onClick={(ev) => {
                            ev.preventDefault();
                        }}
                        className="clickable"
                    >
                        Reset Filter
                    </a>
                    <a
                        href="#save"
                        onClick={(ev) => {
                            ev.preventDefault();
                        }}
                    >
                        Save Filter
                    </a>
                </div>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}
export  default ModalAdvanceFilter