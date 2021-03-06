import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { CustomerProvider } from "../pages/panel/e-commerce/customer/CustomerContext";
import { ProductContextProvider } from "../pages/pre-built/products/ProductContext";
import { UserContextProvider } from "../pages/pre-built/user-manage/UserContext";
import { RedirectAs404 } from "../utils/Utils";

import Homepage from "../pages/Homepage";
import Sales from "../pages/Sales";
import Analytics from "../pages/Analytics";

import EcomOrder from "../pages/panel/e-commerce/order/OrderDefault";
import EcomSupport from "../pages/panel/e-commerce/support/Messages";
import EcomProducts from "../pages/panel/e-commerce/product/ProductList";
import EcomCustomer from "../pages/panel/e-commerce/customer/CustomerList";
import EcomCustomerDetails from "../pages/panel/e-commerce/customer/CustomerDetails";
import EcomIntegration from "../pages/panel/e-commerce/integration/Integration";
import EcomSettings from "../pages/panel/e-commerce/settings/Settings";
import EcomDashboard from "../pages/panel/e-commerce/index";

import Component from "../pages/components/Index";
import Accordian from "../pages/components/Accordions";
import Alerts from "../pages/components/Alerts";
import Badges from "../pages/components/Badges";
import Breadcrumbs from "../pages/components/Breadcrumbs";
import ButtonGroup from "../pages/components/ButtonGroup";
import Buttons from "../pages/components/Buttons";
import Cards from "../pages/components/Cards";
import Carousel from "../pages/components/Carousel";
import Dropdowns from "../pages/components/Dropdowns";
import FormElements from "../pages/components/forms/FormElements";
import FormLayouts from "../pages/components/forms/FormLayouts";
import FormValidation from "../pages/components/forms/FormValidation";
import DateTimePicker from "../pages/components/forms/DateTimePicker";
import Modals from "../pages/components/Modals";
import Pagination from "../pages/components/Pagination";
import Popovers from "../pages/components/Popovers";
import Progress from "../pages/components/Progress";
import Spinner from "../pages/components/Spinner";
import Tabs from "../pages/components/Tabs";
import Toast from "../pages/components/Toast";
import Tooltips from "../pages/components/Tooltips";
import UtilBorder from "../pages/components/UtilBorder";
import UtilColors from "../pages/components/UtilColors";
import UtilDisplay from "../pages/components/UtilDisplay";
import UtilEmbeded from "../pages/components/UtilEmbeded";
import UtilFlex from "../pages/components/UtilFlex";
import UtilOthers from "../pages/components/UtilOthers";
import UtilSizing from "../pages/components/UtilSizing";
import UtilSpacing from "../pages/components/UtilSpacing";
import UtilText from "../pages/components/UtilText";

import Blank from "../pages/others/Blank";
import Faq from "../pages/others/Faq";
import Regularv1 from "../pages/others/Regular-1";
import Regularv2 from "../pages/others/Regular-2";
import Terms from "../pages/others/Terms";
import BasicTable from "../pages/components/table/BasicTable";
import SpecialTablePage from "../pages/components/table/SpecialTable";
import ChartPage from "../pages/components/charts/Charts";
import EmailTemplate from "../pages/components/email-template/Email";
import NioIconPage from "../pages/components/crafted-icons/NioIcon";
import SVGIconPage from "../pages/components/crafted-icons/SvgIcons";

import ProjectCardPage from "../pages/pre-built/projects/ProjectCard";
import ProjectListPage from "../pages/pre-built/projects/ProjectList";
import UserListDefaultPage from "../pages/pre-built/user-manage/UserListDefault";
import UserListRegularPage from "../pages/pre-built/user-manage/UserListRegular";
import UserContactCardPage from "../pages/pre-built/user-manage/UserContactCard";
import UserDetailsPage from "../pages/pre-built/user-manage/UserDetailsRegular";
import UserListCompact from "../pages/pre-built/user-manage/UserListCompact";
import UserProfileLayout from "../pages/pre-built/user-manage/UserProfileLayout";
import OrderDefault from "../pages/pre-built/orders/OrderDefault";
import OrderRegular from "../pages/pre-built/orders/OrderRegular";
import OrderSales from "../pages/pre-built/orders/OrderSales";
import KycListRegular from "../pages/pre-built/kyc-list-regular/KycListRegular";
import KycDetailsRegular from "../pages/pre-built/kyc-list-regular/kycDetailsRegular";
import ProductCard from "../pages/pre-built/products/ProductCard";
import ProductList from "../pages/pre-built/products/ProductList";
import ProductDetails from "../pages/pre-built/products/ProductDetails";
import InvoiceList from "../pages/pre-built/invoice/InvoiceList";
import InvoiceDetails from "../pages/pre-built/invoice/InvoiceDetails";
import PricingTable from "../pages/pre-built/pricing-table/PricingTable";
import Gallery from "../pages/pre-built/gallery/GalleryCard";

import AppMessages from "../pages/app/messages/Messages";
import Chat from "../pages/app/chat/ChatContainer";
import Calender from "../pages/app/calender/Calender";

/** IT-Team */
import Student from '../pages/student';
import StudentDetail from "../pages/student/PagesStudent/StudentDetail";

import Class from '../pages/class';
/************/

const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/** IT-Team */}
        {/*  Student*/}
        <Route exact path={`${process.env.PUBLIC_URL}/students`} component={Student}/>
        <Route exact path={`${process.env.PUBLIC_URL}/students/detail/:id`} component={StudentDetail}/>
        {/*class*/}
        <Route exact path={`${process.env.PUBLIC_URL}/class`} component={Class} />
        {/************/}

        {/*Panel */}
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/index`} component={EcomDashboard}/>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/orders`} component={EcomOrder}/>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/products`} component={EcomProducts}/>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/support`} component={EcomSupport}/>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/ecommerce/customer`}
          render={() => (
            <CustomerProvider>
              <EcomCustomer />
            </CustomerProvider>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/ecommerce/customer-details/:id`}
          render={(props) => (
            <CustomerProvider>
              <EcomCustomerDetails {...props} />
            </CustomerProvider>
          )}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/settings`} component={EcomSettings}/>
        <Route exact path={`${process.env.PUBLIC_URL}/ecommerce/integration`} component={EcomIntegration}/>

        {/*Dashboards*/}
        <Route exact path={`${process.env.PUBLIC_URL}/sales`} component={Sales}/>
        <Route exact path={`${process.env.PUBLIC_URL}/analytics`} component={Analytics}/>
        <Route exact path={`${process.env.PUBLIC_URL}/_blank`} component={Blank}/>

        {/*Pre-built Pages*/}
        <Route exact path={`${process.env.PUBLIC_URL}/project-card`} component={ProjectCardPage}/>
        <Route exact path={`${process.env.PUBLIC_URL}/project-list`} component={ProjectListPage}/>
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-list-regular`}
          render={() => (
            <UserContextProvider>
              <UserListRegularPage />
            </UserContextProvider>
          )}
        />
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-list-default`}
          render={() => (
            <UserContextProvider>
              <UserListDefaultPage />
            </UserContextProvider>
          )}
        />
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-list-compact`}
          render={() => (
            <UserContextProvider>
              <UserListCompact />
            </UserContextProvider>
          )}
        />
        <Route //Context Api added
          exact
          path={`${process.env.PUBLIC_URL}/user-details-regular/:id`}
          render={(props) => (
            <UserContextProvider>
              <UserDetailsPage {...props} />
            </UserContextProvider>
          )}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-regular/`} component={UserProfileLayout}></Route>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/user-profile-notification/`}
          component={UserProfileLayout}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-activity/`} component={UserProfileLayout}/>
        <Route exact path={`${process.env.PUBLIC_URL}/user-profile-setting/`} component={UserProfileLayout}/>
        <Route //Context api added
          exact
          path={`${process.env.PUBLIC_URL}/user-contact-card`}
          render={() => (
            <UserContextProvider>
              <UserContactCardPage />
            </UserContextProvider>
          )}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/order-list-default`} component={OrderDefault}/>
        <Route exact path={`${process.env.PUBLIC_URL}/order-list-regular`} component={OrderRegular}/>
        <Route exact path={`${process.env.PUBLIC_URL}/order-list-sales`} component={OrderSales}/>
        <Route exact path={`${process.env.PUBLIC_URL}/kyc-list-regular`} component={KycListRegular}/>
        <Route exact path={`${process.env.PUBLIC_URL}/kyc-details-regular/:id`} component={KycDetailsRegular}/>
        <Route exact path={`${process.env.PUBLIC_URL}/product-list`} component={ProductList}/>

        <Route // context api added
          exact
          path={`${process.env.PUBLIC_URL}/product-card`}
          render={(props) => (
            <ProductContextProvider>
              <ProductCard />
            </ProductContextProvider>
          )}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/product-details/:id`}
          render={(props) => (
            <ProductContextProvider>
              <ProductDetails {...props} />
            </ProductContextProvider>
          )}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/invoice-list`} component={InvoiceList}/>
        <Route exact path={`${process.env.PUBLIC_URL}/invoice-details/:id`} component={InvoiceDetails}/>
        <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}/>
        <Route exact path={`${process.env.PUBLIC_URL}/image-gallery`} component={Gallery}/>

        {/*Demo Pages*/}
        <Route exact path={`${process.env.PUBLIC_URL}/pages/terms-policy`} component={Terms}/>
        <Route exact path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/>
        <Route exact path={`${process.env.PUBLIC_URL}/pages/regular-v1`} component={Regularv1}/>
        <Route exact path={`${process.env.PUBLIC_URL}/pages/regular-v2`} component={Regularv2}/>

        {/*Application*/}
        <Route exact path={`${process.env.PUBLIC_URL}/app-messages`} component={AppMessages}/>
        <Route exact path={`${process.env.PUBLIC_URL}/app-chat`} component={Chat}/>
        <Route exact path={`${process.env.PUBLIC_URL}/app-calender`} component={Calender}/>

        {/*Components*/}
        <Route exact path={`${process.env.PUBLIC_URL}/components`} component={Component}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/accordions`} component={Accordian}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/alerts`} component={Alerts}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/badges`} component={Badges}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/breadcrumbs`} component={Breadcrumbs}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/button-group`} component={ButtonGroup}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/buttons`} component={Buttons}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/cards`} component={Cards}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/carousel`} component={Carousel}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/dropdowns`} component={Dropdowns}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/datetime-picker`} component={DateTimePicker}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/form-elements`} component={FormElements}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/form-layouts`} component={FormLayouts}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/form-validation`} component={FormValidation}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/modals`} component={Modals}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/pagination`} component={Pagination}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/popovers`} component={Popovers}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/progress`} component={Progress}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/spinner`} component={Spinner}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/tabs`} component={Tabs}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/toast`} component={Toast}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/tooltips`} component={Tooltips}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-border`} component={UtilBorder}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-colors`} component={UtilColors}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-display`} component={UtilDisplay}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-embeded`} component={UtilEmbeded}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-flex`} component={UtilFlex}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-others`} component={UtilOthers}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-sizing`} component={UtilSizing}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-spacing`} component={UtilSpacing}/>
        <Route exact path={`${process.env.PUBLIC_URL}/components/util-text`} component={UtilText}/>
        <Route exact path={`${process.env.PUBLIC_URL}/table-basic`} component={BasicTable}/>
        <Route exact path={`${process.env.PUBLIC_URL}/table-special`} component={SpecialTablePage}/>
        <Route exact path={`${process.env.PUBLIC_URL}/charts/chartjs`} component={ChartPage}/>
        <Route exact path={`${process.env.PUBLIC_URL}/email-template`} component={EmailTemplate}/>
        <Route exact path={`${process.env.PUBLIC_URL}/nioicon`} component={NioIconPage}/>
        <Route exact path={`${process.env.PUBLIC_URL}/svg-icons`} component={SVGIconPage}/>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}/>
        <Route component={RedirectAs404}/>
      </Switch>
    </Suspense>
  );
};
export default Pages;
