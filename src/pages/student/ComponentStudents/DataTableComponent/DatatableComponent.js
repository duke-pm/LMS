import {
    DataTable,
    DataTableBody,
    DataTableHead,
    DataTableItem,
    DataTableRow
} from "../../../../components/table/DataTable";
import {
    Button,
    Icon,
    PaginationComponent,
    TooltipComponent,
    UserAvatar
} from "../../../../components/Component";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";
import {findUpper} from "../../../../utils/Utils";
import React from "react";
import ModalAdvanceFilter from "./ModalAdvanceFilter";

const DatatableComponent =(props)=>{
    return(
        <DataTable>
            <div className="card-inner position-relative card-tools-toggle">
                <div className="card-title-group">
                    <div className="card-tools" />
                    <div className="card-tools mr-n1">
                        <ul className="btn-toolbar gx-1">
                            <li>
                                <a
                                    href="#search"
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        props.toggle();
                                    }}
                                    className="btn btn-icon search-toggle toggle-search"
                                >
                                    <Icon name="search"/>
                                </a>
                            </li>
                            <li className="btn-toolbar-sep"/>
                            <li>
                                <div className="toggle-wrap">
                                    <Button
                                        className={`btn-icon btn-trigger toggle ${props.tablesm ? "active" : ""}`}
                                        onClick={() => props.updateTableSm(true)}
                                    >
                                        <Icon name="menu-right"/>
                                    </Button>
                                    <div className={`toggle-content ${props.tablesm ? "content-active" : ""}`}>
                                        <ul className="btn-toolbar gx-1">
                                            <li className="toggle-close">
                                                <Button className="btn-icon btn-trigger toggle" onClick={() => props.updateTableSm(false)}>
                                                    <Icon name="arrow-left"/>
                                                </Button>
                                            </li>
                                            <li>
                                                <ModalAdvanceFilter modalFilter={props.modalFilter} toggleFilters={props.toggleFilters}  />
                                            </li>
                                            <li>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle color="tranparent" className="btn btn-trigger btn-icon dropdown-toggle">
                                                        <Icon name="setting"/>
                                                    </DropdownToggle>
                                                    <DropdownMenu right className="dropdown-menu-xs">
                                                        <ul className="link-check">
                                                            <li>
                                                                <span>Show</span>
                                                            </li>
                                                            <li className={props.itemPerPage === 5 ? "active" : ""}>
                                                                <DropdownItem
                                                                    tag="a"
                                                                    href="#dropdownitem"
                                                                    onClick={(ev) => {
                                                                        ev.preventDefault();
                                                                        props.setItemPerPage(5);
                                                                    }}
                                                                >
                                                                    5
                                                                </DropdownItem>
                                                            </li>
                                                            <li className={props.itemPerPage === 10 ? "active" : ""}>
                                                                <DropdownItem
                                                                    tag="a"
                                                                    href="#dropdownitem"
                                                                    onClick={(ev) => {
                                                                        ev.preventDefault();
                                                                        props.setItemPerPage(10);
                                                                    }}
                                                                >
                                                                    10
                                                                </DropdownItem>
                                                            </li>
                                                            <li className={props.itemPerPage === 15 ? "active" : ""}>
                                                                <DropdownItem
                                                                    tag="a"
                                                                    href="#dropdownitem"
                                                                    onClick={(ev) => {
                                                                        ev.preventDefault();
                                                                        props.setItemPerPage(15);
                                                                    }}
                                                                >
                                                                    15
                                                                </DropdownItem>
                                                            </li>
                                                        </ul>
                                                        <ul className="link-check">
                                                            <li>
                                                                <span>Order</span>
                                                            </li>
                                                            <li className={props.sort === "dsc" ? "active" : ""}>
                                                                <DropdownItem
                                                                    tag="a"
                                                                    href="#dropdownitem"
                                                                    onClick={(ev) => {
                                                                        ev.preventDefault();
                                                                        props.setSortState("dsc");
                                                                        props.sortFunc("dsc");
                                                                    }}
                                                                >
                                                                    DESC
                                                                </DropdownItem>
                                                            </li>
                                                            <li className={props.sort === "asc" ? "active" : ""}>
                                                                <DropdownItem
                                                                    tag="a"
                                                                    href="#dropdownitem"
                                                                    onClick={(ev) => {
                                                                        ev.preventDefault();
                                                                        props.setSortState("asc");
                                                                        props.sortFunc("asc");
                                                                    }}
                                                                >
                                                                    ASC
                                                                </DropdownItem>
                                                            </li>
                                                        </ul>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`card-search search-wrap ${!props.onSearch && "active"}`}>
                    <div className="card-body">
                        <div className="search-content">
                            <Button
                                className="search-back btn-icon toggle-search active"
                                onClick={() => {
                                    props.setSearchText("");
                                    props.toggle();
                                }}
                            >
                                <Icon name="arrow-left"/>
                            </Button>
                            <input
                                type="text"
                                className="border-transparent form-focus-none form-control"
                                placeholder="Search by user or email"
                                value={props.onSearchText}
                                onChange={(e) => props.onFilterChange(e)}
                            />
                            <Button className="search-submit btn-icon">
                                <Icon name="search"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <DataTableBody>
                {/* Header row table */}
                <DataTableHead>
                    {/*<DataTableRow className="nk-tb-col-check">*/}
                    {/*    <div className="custom-control custom-control-sm custom-checkbox notext">*/}
                    {/*        <input*/}
                    {/*            type="checkbox"*/}
                    {/*            className="custom-control-input form-control"*/}
                    {/*            onChange={(e) => props.selectorCheck(e)}*/}
                    {/*            id="uid"*/}
                    {/*        />*/}
                    {/*        <label className="custom-control-label" htmlFor="uid"></label>*/}
                    {/*    </div>*/}
                    {/*</DataTableRow>*/}
                    <DataTableRow size="mb">
                        <span className="sub-text">Code</span>
                    </DataTableRow>
                    <DataTableRow>
                        <span className="sub-text">Students</span>
                    </DataTableRow>
                    <DataTableRow size="mb">
                        <span className="sub-text">Gender</span>
                    </DataTableRow>
                    <DataTableRow size="mb">
                        <span className="sub-text">Date of Birth</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                        <span className="sub-text">Phone</span>
                    </DataTableRow>
                    <DataTableRow size="lg">
                        <span className="sub-text">Address</span>
                    </DataTableRow>
                    <DataTableRow size="md">
                        <span className="sub-text">Center</span>
                    </DataTableRow>
                    <DataTableRow className="nk-tb-col-tools text-right" />
                </DataTableHead>


                {props.currentItems.length > 0
                    ? props.currentItems.map((item) => {
                        return (
                            <DataTableItem key={item.id}>
                                {/*<DataTableRow className="nk-tb-col-check">*/}
                                {/*    <div className="custom-control custom-control-sm custom-checkbox notext">*/}
                                {/*        <input*/}
                                {/*            type="checkbox"*/}
                                {/*            className="custom-control-input form-control"*/}
                                {/*            defaultChecked={item.checked}*/}
                                {/*            id={item.id + "uid1"}*/}
                                {/*            key={Math.random()}*/}
                                {/*            onChange={(e) => props.onSelectChange(e, item.id)}*/}
                                {/*        />*/}
                                {/*        <label className="custom-control-label" htmlFor={item.id + "uid1"}></label>*/}
                                {/*    </div>*/}
                                {/*</DataTableRow>*/}
                                <DataTableRow size="mb">
                                    <span>{item.id}</span>
                                </DataTableRow>
                                <DataTableRow>
                                    <Link to={`${process.env.PUBLIC_URL}/user-details-regular/${item.id}`}>
                                        <div className="user-card">
                                            <UserAvatar
                                                theme={item.avatarBg}
                                                text={findUpper(item.name)}
                                                image={item.image}
                                            />
                                            <div className="user-info">
                                <span className="tb-lead">
                                  {item.name}{" "}
                                    <span
                                        className={`dot dot-${
                                            item.status === "Active"
                                                ? "success"
                                                : item.status === "Pending"
                                                    ? "warning"
                                                    : "danger"
                                        } d-md-none ml-1`}
                                    />
                                </span>
                                                <span>{item.email}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </DataTableRow>
                                <DataTableRow size="mb">
                                    <span>{item.gender}</span>
                                </DataTableRow>
                                <DataTableRow size="md">
                                    <span>{item.dob}</span>
                                </DataTableRow>
                                <DataTableRow size="md">
                                    <span>{item.phone}</span>
                                </DataTableRow>
                                <DataTableRow size="lg">
                                    <span>{item.address}</span>
                                </DataTableRow>
                                <DataTableRow size="lg">
                                    <span>{item.designation}</span>
                                </DataTableRow>
                                <DataTableRow className="nk-tb-col-tools">
                                    <ul className="nk-tb-actions gx-1">
                                        <li className="nk-tb-action-hidden" onClick={() => props.handleEdit(item.id)}>
                                            <TooltipComponent
                                                tag="a"
                                                containerClassName="btn btn-trigger btn-icon"
                                                id={"edit" + item.id}
                                                icon="edit-alt-fill"
                                                direction="top"
                                                text="Edit"
                                            />
                                        </li>
                                        <li>
                                            <UncontrolledDropdown>
                                                <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                                                    <Icon name="more-h"/>
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <ul className="link-list-opt no-bdr">
                                                        <li onClick={() => props.handleDetails(item.id)}>
                                                            <DropdownItem
                                                                tag="a"
                                                                href="#edit"
                                                                onClick={(ev) => {
                                                                    ev.preventDefault();
                                                                }}
                                                            >
                                                                <Icon name="eye"/>
                                                                <span>Details</span>
                                                            </DropdownItem>
                                                        </li>
                                                        <li onClick={() => props.handleEdit(item.id)}>
                                                            <DropdownItem
                                                                tag="a"
                                                                href="#edit"
                                                                onClick={(ev) => {
                                                                    ev.preventDefault();
                                                                }}
                                                            >
                                                                <Icon name="edit"/>
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
                        );
                    })
                    : null}
            </DataTableBody>

            {/** Paging table */}
            <div className="card-inner">
                {props.currentItems.length > 0 ? (
                    <PaginationComponent
                        itemPerPage={props.itemPerPage}
                        totalItems={props.students.length}
                        paginate={props.paginate}
                        currentPage={props.currentPage}
                    />
                ) : (
                    <div className="text-center">
                        <span className="text-silent">{'No data found'}</span>
                    </div>
                )}
            </div>
        </DataTable>

    )
}
export  default DatatableComponent