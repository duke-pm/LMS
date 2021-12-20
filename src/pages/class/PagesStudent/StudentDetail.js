import React,{useState}  from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle} from "../../../components/block/Block";
import {
    Button,
    DataTable,
    DataTableBody, DataTableHead, DataTableItem,
    DataTableRow,
    Icon,
    OverlineTitle, TooltipComponent,
    UserAvatar
} from "../../../components/Component";
import {useHistory} from "react-router";
import {Card, Collapse, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {findUpper} from "../../../utils/Utils";
import AvatarA from "../../../images/avatar/a-sm.jpg";
import StockA from "../../../images/stock/a.jpg";
import FormActivity from "./FormActivity";


const StudentDetail = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState("1");

    return(
      <>
          <Head title="Student profile"></Head>
          <Content>
              <BlockHead size="sm">
                  <BlockBetween>
                      <BlockHeadContent>
                          <BlockTitle tag="h3" page>
                              {'Profile student'}
                          </BlockTitle>
                      </BlockHeadContent>
                      <BlockHeadContent>
                          <Button
                              color="light"
                              outline
                              className="bg-white d-none d-sm-inline-flex"
                              onClick={() => history.goBack()}
                          >
                              <Icon name="arrow-left"></Icon>
                              <span>Back</span>
                          </Button>
                          <a
                              href="#back"
                              onClick={(ev) => {
                                  ev.preventDefault();
                                  history.goBack();
                              }}
                              className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"
                          >
                              <Icon name="arrow-left"></Icon>
                          </a>
                      </BlockHeadContent>
                  </BlockBetween>
              </BlockHead>
              <Block>
                  <Card className="card">
                      <div className="row">
                          <div className="col-lg-2">
                              <div className="d-flex flex-column justify-content-between align-center">
                                  <UserAvatar
                                      className="xl mt-2"
                                      size="lg"
                                      theme="theme"
                                      image={AvatarA}
                                  />
                                  <div className="toggle-wrap nk-block-tools-toggle">
                                      <Button color="primary" className="btn-primary mt-2 mb-2 " size="sm">
                                          <Icon name="edit"></Icon>
                                          <span>{'Update'}</span>
                                      </Button>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 p-0">
                              <ul className="data-list is-compact">
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">ID Student</div>
                                          <div className="data-value ml-5">HV000001</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Student</div>
                                          <div className="data-value ml-5">HV000001</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Birthday</div>
                                          <div className="data-value ml-5">25/11/2021</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Gender</div>
                                          <div className="data-value ml-5">Male</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Address</div>
                                          <div className="data-value ml-5">HV000001</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Phone</div>
                                          <div className="data-value ml-5">+84 082 123 345</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Email</div>
                                          <div className="data-value ml-5">abc@gmail.com</div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <div className="col-lg-6 p-0">
                              <ul className="data-list is-compact">
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Contact</div>
                                          <div className="data-value">HV000001</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Phone</div>
                                          <div className="data-value">+84 082 123 345</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Email</div>
                                          <div className="data-value">abc@gmail.com</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Father</div>
                                          <div className="data-value">HV000001</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Email</div>
                                          <div className="data-value">abc@gmail.com</div>
                                          <div className="data-label ml-3">Phone</div>
                                          <div className="data-value">+84 082 123 345</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Mother</div>
                                          <div className="data-value">HV000001</div>
                                      </div>
                                  </li>
                                  <li className="data-item">
                                      <div className="data-col">
                                          <div className="data-label">Email</div>
                                          <div className="data-value">abc@gmail.com</div>
                                          <div className="data-label ml-3">Phone</div>
                                          <div className="data-value">+84 082 123 345</div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </Card>
                  <div className="mt-1 row">
                      <div className="col-lg-8 pr-0">
                          <Card className="card p-2 ">
                              <OverlineTitle  tag="span" className="preview-title-lg preview-title-primary">
                                  Related information
                              </OverlineTitle>
                              <hr></hr>
                              <div className="accordion">
                                  <div className="accordion-item accordion-1">
                                      <div
                                          className= "accordion-head"
                                          onClick={() => setIsOpen("1")}
                                      >
                                          <h6 className="title title--item--accordion1">Registered course (0)</h6>
                                          <span className="accordion-icon"></span>
                                      </div>
                                      <Collapse
                                          className="accordion-body"
                                          isOpen={isOpen === "1" ? true : false}
                                      >
                                          {/*<div className="accordion-inner">*/}
                                              <DataTable>
                                                  <DataTableBody>
                                                      <DataTableHead>
                                                          <DataTableRow size="mb">
                                                              <span className="sub-text">Class</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="mb">
                                                              <span className="sub-text">Show</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="mb">
                                                              <span className="sub-text">Level</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="mb">
                                                              <span className="sub-text">Date Register</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="mb">
                                                              <span className="sub-text">Status</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="mb">
                                                          </DataTableRow>
                                                      </DataTableHead>
                                                      <DataTableItem>
                                                          <DataTableRow size="mb">
                                                              <span className="desc-text-primary">Ps09912</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="mb">
                                                              <span className="desc-text-primary">Account Management Course</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="mb">
                                                              <span className="desc-text-primary">Level 1</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="mb">
                                                              <span className="desc-text-primary">22/10/2021</span>
                                                          </DataTableRow>
                                                          <DataTableRow size="md">
                                                            <span
                                                              className={`badge badge-sm badge-dot has-bg badge-success`}
                                                            >
                                                            Completed
                                                            </span>
                                                          </DataTableRow>
                                                          <DataTableRow className="nk-tb-col-tools">
                                                              <ul className="nk-tb-actions gx-5">
                                                                  <li>
                                                                      <UncontrolledDropdown>
                                                                          <DropdownToggle tag="a" className=" dropdown-toggle btn btn-icon btn-trigger">
                                                                              <Icon name="more-v desc-text-primary "></Icon>
                                                                          </DropdownToggle>
                                                                          <DropdownMenu left>
                                                                              <ul className="link-list-opt no-bdr">
                                                                                  <li>
                                                                                      <DropdownItem
                                                                                          tag="a"
                                                                                          href="#edit"
                                                                                          onClick={(ev) => {
                                                                                              ev.preventDefault();
                                                                                          }}
                                                                                      >
                                                                                          <Icon name="eye"></Icon>
                                                                                          <span>Details</span>
                                                                                      </DropdownItem>
                                                                                  </li>
                                                                                  <li>
                                                                                      <DropdownItem
                                                                                          tag="a"
                                                                                          href="#edit"
                                                                                          onClick={(ev) => {
                                                                                              ev.preventDefault();
                                                                                          }}
                                                                                      >
                                                                                          <Icon name="edit"></Icon>
                                                                                          <span>Edit</span>
                                                                                      </DropdownItem>
                                                                                  </li>
                                                                              </ul>
                                                                          </DropdownMenu>
                                                                      </UncontrolledDropdown>
                                                                  </li>
                                                              </ul>
                                                          </DataTableRow>

                                                      </DataTableItem>
                                                  </DataTableBody>
                                              </DataTable>
                                          {/*</div>*/}
                                      </Collapse>
                                  </div>
                                  <div className="accordion-item accordion-2 ">
                                      <div
                                          className="accordion-head collapsed"
                                          onClick={() => setIsOpen("2")}
                                      >
                                          <h6 className="title title--item--accordion2">
                                              Certificate of Achievement(0)
                                          </h6>
                                          <span className="accordion-icon"></span>
                                      </div>
                                      <Collapse
                                          className="accordion-body"
                                          isOpen={isOpen === "2" ? true : false}
                                      >
                                          <div className="accordion-inner">
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                                              </p>
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat.
                                              </p>
                                          </div>
                                      </Collapse>
                                  </div>
                                  <div className="accordion-item accordion-3">
                                      <div
                                          className="accordion-head collapsed"
                                          onClick={() => setIsOpen("3")}
                                      >
                                          <h6 className="title title--item--accordion3">
                                              Result of the entrance exam(0)
                                          </h6>
                                          <span className="accordion-icon"></span>
                                      </div>
                                      <Collapse
                                          className="accordion-body"
                                          isOpen={isOpen === "3" ? true : false}
                                      >
                                          <div className="accordion-inner">
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                                              </p>
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat.
                                              </p>
                                          </div>
                                      </Collapse>
                                  </div>
                                  <div className="accordion-item accordion-4">
                                      <div
                                          className="accordion-head collapsed"
                                          onClick={() => setIsOpen("4")}
                                      >
                                          <h6 className="title title--item--accordion4">Payment history(0)</h6>
                                          <span className="accordion-icon"></span>
                                      </div>
                                      <Collapse
                                          className="accordion-body"
                                          isOpen={isOpen === "4" ? true : false}
                                      >
                                          <div className="accordion-inner">
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                                              </p>
                                              <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat.
                                              </p>
                                          </div>
                                      </Collapse>
                                  </div>
                              </div>
                          </Card>
                      </div>
                      <div className="col-lg-4">
                          <Card className="card">
                              <OverlineTitle  tag="span" className="p-2 preview-title-lg preview-title-primary">
                                  Activity
                              </OverlineTitle>
                              <hr></hr>
                              <FormActivity/>
                          </Card>
                      </div>
                  </div>
              </Block>
          </Content>
      </>
  )
}
export  default StudentDetail