import {DropdownMenu, DropdownToggle, FormGroup, UncontrolledDropdown} from "reactstrap";
import {Button, Col, Icon, Row, RSelect} from "../../../../components/Component";
import {filterRole, filterStatus} from "../../utils/UserData";
import React from "react";

const  ModalAdvanceFilter =(props)=>{
    return(
        <UncontrolledDropdown isOpen={props.modalFilter} onToggle={props.toggleFilters}>
            <DropdownToggle color="tranparent" className="btn btn-trigger btn-icon dropdown-toggle">
                <Icon name="filter"></Icon>
            </DropdownToggle>
            <DropdownMenu right className="dropdown-menu-xxl">
                <div className="dropdown-head f-flex flex-column">
                    <span className="sub-title dropdown-title">Filter Students</span>
                    <span className="small">Search student by condition below</span>
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
                                <label className="overline-title overline-title-alt">Group</label>
                                <RSelect options={filterStatus} placeholder="Any Group" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Subject</label>
                                <RSelect options={filterStatus} placeholder="Any Subject" />
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
                                <label className="overline-title overline-title-alt">Company</label>
                                <RSelect options={filterStatus} placeholder="Any Company" />
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
                                <label className="overline-title overline-title-alt">Name</label>
                                <RSelect options={filterRole} placeholder="Any Name" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Address</label>
                                <RSelect options={filterStatus} placeholder="Any Address" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Class code</label>
                                <RSelect options={filterStatus} placeholder="Any Class code" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className={'gx-6 gy-3'}>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Date of Birth</label>
                                <RSelect options={filterRole} placeholder="Any Date of Birth" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">State</label>
                                <RSelect options={filterStatus} placeholder="Any State" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Presenter</label>
                                <RSelect options={filterStatus} placeholder="Any Presenter" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className={'gx-6 gy-3'}>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">Status</label>
                                <RSelect options={filterRole} placeholder="Any Status" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">District</label>
                                <RSelect options={filterStatus} placeholder="Any District" />
                            </FormGroup>
                        </Col>
                        <Col size="4">
                            <FormGroup>
                                <label className="overline-title overline-title-alt">From source</label>
                                <RSelect options={filterStatus} placeholder="Any From source" />
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