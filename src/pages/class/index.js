import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
/** COMPONENTS */
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
} from "../../components/Component";
/** COMMON */
import {userData} from './utils/UserData';
import DatatableComponent from "./ComponentClass/DataTableComponent/DatatableComponent";
import AddClass from "./ComponentClass/ModifyClass/AddClass";
import {useHistory} from "react-router";

function Class(props) {
  
  const [loading, setLoading] = useState(true);
  const [sm, updateSm] = useState(false);
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  });
  const [tablesm, updateTableSm] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const [onSearch, setonSearch] = useState(true);
  const [formData, setFormData] = useState({
    classId:'',
    shift:null,
    central:'',
    time_start:null,
    time_end:null,
    date_study:null,
    type:null,
    time_study:null,
    status:null,
    room:null,
    relax:null,
    time_ex:null,
    group:null,
    note:'',
    //information
    show:'',
    time:null,
    week:null,
    studentMin:null,
    studentMax:null,
    level:null,
    classPrice:null,
    courseTemplate:null,
    classBefore:'',
    priceTime:'',
    priceEx:'',
    discount:'',
    //information difference
    teacher:null,
    salaryPayment1:null,
    salaryPaymentValue1:null,
    mentor1:null,
    salaryPayment2:null,
    salaryPaymentValue2:null,
    teacherRadio:null,
    mentor2:'',
    salaryPayment3:null,
    salaryPaymentValue3:null,
    staff:null
  });
  const [onSearchText, setSearchText] = useState("");
  const [actionText, setActionText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [sort, setSortState] = useState("");
  const [editId, setEditedId] = useState(null);
  const [students, setStudents] = useState(userData);
  const history = useHistory();

  const { errors, register, handleSubmit } = useForm();

  /** HANDLE FUNC */
  const toggleFilters = () => setModalFilter(!modalFilter);

  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch);

  // function that loads the want to see details data
  const handleDetails = (id) => {
    // students.forEach((item) => {
    //   if (item.id === id) {
    //     console.log('[LOG] ===  ===> ', id);
    //   }
    // });
    history.push('/demo2/students/detail/2')
  };

  // function that loads the want to editted data
  const handleEdit = (id) => {
    students.forEach((item) => {
      if (item.id === id) {
        setFormData({
          name: item.name,
          email: item.email,
          status: item.status,
          phone: item.phone,
          balance: item.balance,
        });
        setModal({ edit: true }, { add: false });
        setEditedId(id);
      }
    });
  };

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /** FUNC */
  // function to set the action to be taken in table header
  const onActionText = (e) => {
    setActionText(e.value);
  };

  // function which fires on applying selected action
  const onActionClick = (e) => {
    if (actionText === "suspend") {
      let newData = students.map((item) => {
        if (item.checked === true) item.status = "Suspend";
        return item;
      });
      setStudents([...newData]);
    } else if (actionText === "delete") {
      let newData;
      newData = students.filter((item) => item.checked !== true);
      setStudents([...newData]);
    }
  };

  // Sorting data
  const sortFunc = (params) => {
    let defaultData = students;
    if (params === "asc") {
      let sortedData = defaultData.sort((a, b) => a.name.localeCompare(b.name));
      setStudents([...sortedData]);
    } else if (params === "dsc") {
      let sortedData = defaultData.sort((a, b) => b.name.localeCompare(a.name));
      setStudents([...sortedData]);
    }
  };

  // function to change to suspend property for an item
  const suspendUser = (id) => {
    let newData = students;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].status = "Suspend";
    setStudents([...newData]);
  };

  // function to change the check property of an item
  const selectorCheck = (e) => {
    let newData;
    newData = students.map((item) => {
      item.checked = e.currentTarget.checked;
      return item;
    });
    setStudents([...newData]);
  };

   // onChange function for searching name
   const onFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  // function to change the selected property of an item
  const onSelectChange = (e, id) => {
    let newData = students;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].checked = e.currentTarget.checked;
    setStudents([...newData]);
  };

  // function to reset the form
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      balance: "",
      phone: "",
      status: "Active",
    });
  };

  // function to close the form modal
  const onFormCancel = () => {
    setModal({ edit: false, add: false });
    resetForm();
  };

  // submit function to add a new item
  const onFormSubmit = (submitData) => {
    const { name, email, balance, phone } = submitData;
    let submittedData = {
      id: students.length + 1,
      avatarBg: "purple",
      name: name,
      role: "Customer",
      email: email,
      balance: balance,
      phone: phone,
      emailStatus: "success",
      kycStatus: "alert",
      lastLogin: "10 Feb 2020",
      status: formData.status,
      country: "Bangladesh",
    };
    students([submittedData, ...students]);
    resetForm();
    setModal({ edit: false }, { add: false });
  };

  // submit function to update a new item
  const onEditSubmit = (submitData) => {
    const { name, email, phone } = submitData;
    let submittedData;
    let newitems = students;
    newitems.forEach((item) => {
      if (item.id === editId) {
        submittedData = {
          id: item.id,
          avatarBg: item.avatarBg,
          name: name,
          image: item.image,
          role: item.role,
          email: email,
          balance: formData.balance,
          phone: "+" + phone,
          emailStatus: item.emailStatus,
          kycStatus: item.kycStatus,
          lastLogin: item.lastLogin,
          status: formData.status,
          country: item.country,
        };
      }
    });
    let index = newitems.findIndex((item) => item.id === editId);
    newitems[index] = submittedData;
    setModal({ edit: false });
    resetForm();
  };
  

  /** LIFE CYCLE */
  useEffect(() => {
    /** Set data students */
    setLoading(false);
  }, []);

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = students.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <React.Fragment>
      <Head title="Class"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                {'Class'}
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>{`You have total ${students.length} class.`}</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <Button color="light" outline className="btn-white">
                        <Icon name="download-cloud"></Icon>
                        <span>{'Export'}</span>
                      </Button>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button color="primary" className="btn-primary" onClick={() => setModal({ add: true })}>
                        <Icon name="plus"></Icon>
                        <span>{'Add New'}</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <DatatableComponent
              tablesm={tablesm}
              onSearch={onSearch}
              updateTableSm={updateTableSm}
              modalFilter={modalFilter}
              toggleFilters={toggleFilters}
              itemPerPage={itemPerPage}
              setItemPerPage={setItemPerPage}
              sort={sort}
              toggle={toggle}
              setSortState={setSortState}
              sortFunc={sortFunc}
              setSearchText={setSearchText}
              onSearchText={onSearchText}
              onFilterChange={onFilterChange}
              selectorCheck={selectorCheck}
              currentItems={currentItems}
              onSelectChange={onSelectChange}
              handleEdit={handleEdit}
              suspendUser={suspendUser}
              handleDetails={handleDetails}
              students={students}

          />
        </Block>
        <AddClass
            modal={modal}
            setModal={setModal}
            onFormCancel={onFormCancel}
            handleSubmit={handleSubmit}
            onFormSubmit={onFormSubmit}
            formData={formData}
            register={register}
            errors={errors}
            setFormData={setFormData}
            id="form-2"
            alter
        />
        {/*<Modal isOpen={modal.edit} toggle={() => setModal({ edit: false })} className="modal-dialog-centered" size="lg">*/}
        {/*  <ModalBody>*/}
        {/*    <a*/}
        {/*      href="#cancel"*/}
        {/*      onClick={(ev) => {*/}
        {/*        ev.preventDefault();*/}
        {/*        onFormCancel();*/}
        {/*      }}*/}
        {/*      className="close"*/}
        {/*    >*/}
        {/*      <Icon name="cross-sm"></Icon>*/}
        {/*    </a>*/}
        {/*    <div className="p-2">*/}
        {/*      <h5 className="title">Update User</h5>*/}
        {/*      <div className="mt-4">*/}
        {/*        <Form className="row gy-4" onSubmit={handleSubmit(onEditSubmit)}>*/}
        {/*          <Col md="6">*/}
        {/*            <FormGroup>*/}
        {/*              <label className="form-label">Name</label>*/}
        {/*              <input*/}
        {/*                className="form-control"*/}
        {/*                type="text"*/}
        {/*                name="name"*/}
        {/*                defaultValue={formData.name}*/}
        {/*                placeholder="Enter name"*/}
        {/*                ref={register({ required: "This field is required" })}*/}
        {/*              />*/}
        {/*              {errors.name && <span className="invalid">{errors.name.message}</span>}*/}
        {/*            </FormGroup>*/}
        {/*          </Col>*/}
        {/*          <Col md="6">*/}
        {/*            <FormGroup>*/}
        {/*              <label className="form-label">Email</label>*/}
        {/*              <input*/}
        {/*                className="form-control"*/}
        {/*                type="text"*/}
        {/*                name="email"*/}
        {/*                defaultValue={formData.email}*/}
        {/*                placeholder="Enter email"*/}
        {/*                ref={register({*/}
        {/*                  required: "This field is required",*/}
        {/*                  pattern: {*/}
        {/*                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,*/}
        {/*                    message: "invalid email address",*/}
        {/*                  },*/}
        {/*                })}*/}
        {/*              />*/}
        {/*              {errors.email && <span className="invalid">{errors.email.message}</span>}*/}
        {/*            </FormGroup>*/}
        {/*          </Col>*/}
        {/*          <Col md="6">*/}
        {/*            <FormGroup>*/}
        {/*              <label className="form-label">Balance</label>*/}
        {/*              <input*/}
        {/*                className="form-control"*/}
        {/*                type="number"*/}
        {/*                name="balance"*/}
        {/*                disabled*/}
        {/*                defaultValue={parseFloat(formData.balance.replace(/,/g, ""))}*/}
        {/*                placeholder="Balance"*/}
        {/*                ref={register({ required: "This field is required" })}*/}
        {/*              />*/}
        {/*              {errors.balance && <span className="invalid">{errors.balance.message}</span>}*/}
        {/*            </FormGroup>*/}
        {/*          </Col>*/}
        {/*          <Col md="6">*/}
        {/*            <FormGroup>*/}
        {/*              <label className="form-label">Phone</label>*/}
        {/*              <input*/}
        {/*                className="form-control"*/}
        {/*                type="number"*/}
        {/*                name="phone"*/}
        {/*                defaultValue={Number(formData.phone)}*/}
        {/*                ref={register({ required: "This field is required" })}*/}
        {/*              />*/}
        {/*              {errors.phone && <span className="invalid">{errors.phone.message}</span>}*/}
        {/*            </FormGroup>*/}
        {/*          </Col>*/}
        {/*          <Col md="12">*/}
        {/*            <FormGroup>*/}
        {/*              <label className="form-label">Status</label>*/}
        {/*              <div className="form-control-wrap">*/}
        {/*                <RSelect*/}
        {/*                  options={filterStatus}*/}
        {/*                  defaultValue={{*/}
        {/*                    value: formData.status,*/}
        {/*                    label: formData.status,*/}
        {/*                  }}*/}
        {/*                  onChange={(e) => setFormData({ ...formData, status: e.value })}*/}
        {/*                />*/}
        {/*              </div>*/}
        {/*            </FormGroup>*/}
        {/*          </Col>*/}
        {/*          <Col size="12">*/}
        {/*            <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">*/}
        {/*              <li>*/}
        {/*                <Button color="primary" size="md" type="submit">*/}
        {/*                  Update User*/}
        {/*                </Button>*/}
        {/*              </li>*/}
        {/*              <li>*/}
        {/*                <a*/}
        {/*                  href="#cancel"*/}
        {/*                  onClick={(ev) => {*/}
        {/*                    ev.preventDefault();*/}
        {/*                    onFormCancel();*/}
        {/*                  }}*/}
        {/*                  className="link link-light"*/}
        {/*                >*/}
        {/*                  Cancel*/}
        {/*                </a>*/}
        {/*              </li>*/}
        {/*            </ul>*/}
        {/*          </Col>*/}
        {/*        </Form>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </ModalBody>*/}
        {/*</Modal>*/}
      </Content>
    </React.Fragment>
  )
}

export default Class;
