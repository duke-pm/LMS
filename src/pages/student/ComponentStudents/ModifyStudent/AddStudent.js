import {
    Form,
    FormGroup,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from "reactstrap";
import {Button, Icon, OverlineTitle} from "../../../../components/Component";
import React, {useState} from "react";
import classnames from 'classnames'
import classNames from "classnames";
import DatePicker from "react-datepicker";
import TabInformation from "./TabInformation";
import TabContact from "./TabContact";
import Difference from "./Difference";
const AddStudent =(props)=>{
    const [activeTab , setActivetab] = useState("1");
    const toggle = (value) => setActivetab(value) ;
    const formClass = classNames({
        "form-validate": true,
        "is-alter": props.alter,
    });
    return(
        <Modal scrollable={true} isOpen={props.modal.add} toggle={() => props.setModal({ add: false })} style={{maxWidth: '850px'}} className="modal-dialog-top" size="lg">
            <ModalHeader toggle ={props.onFormCancel} close={
                <button className="close" onClick={props.onFormCancel}>
                    <Icon name="cross" />
                </button>
            }>
                   Add User
            </ModalHeader>
            <ModalBody>
                <Form className={formClass} onSubmit={props.handleSubmit(props.onFormSubmit)}>
                <Nav tabs className="mt-n3">
                    <NavItem>
                        <NavLink
                            tag="a"
                            href="#tab"
                            className={classnames({ active: activeTab === "1" })}
                            onClick={(ev) => {
                                ev.preventDefault();
                                toggle("1");
                            }}
                        >
                            Information
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag="a"
                            href="#tab"
                            className={classnames({ active: activeTab === "2" })}
                            onClick={(ev) => {
                                ev.preventDefault();
                                toggle("2");
                            }}
                        >
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag="a"
                            href="#tab"
                            className={classnames({ active: activeTab === "3" })}
                            onClick={(ev) => {
                                ev.preventDefault();
                                toggle("3");
                            }}
                        >
                            Other information
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <TabInformation
                            formData={props.formData}
                            register={props.register}
                            errors={props.errors}
                        />
                    </TabPane>
                    <TabPane tabId="2">
                        <TabContact
                            formData={props.formData}
                            register={props.register}
                            errors={props.errors}/>
                    </TabPane>
                    <TabPane tabId="3">
                        <Difference
                            formData={props.formData}
                            register={props.register}
                            errors={props.errors}
                        />
                    </TabPane>
                </TabContent>
                <div className="d-flex flex-row justify-content-end mt-3">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                        <li>
                            <Button color="primary" size="md" type="submit">
                                Add User
                            </Button>
                        </li>
                        <li>
                            <a
                                href="#cancel"
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    props.onFormCancel();
                                }}
                                className="link link-light"
                            >
                                Cancel
                            </a>
                        </li>
                    </ul>
                </div>
                </Form>
            </ModalBody>
        </Modal>
    )
}
export default AddStudent