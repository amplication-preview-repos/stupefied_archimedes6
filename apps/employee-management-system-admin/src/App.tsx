import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PositionsList } from "./positions/PositionsList";
import { PositionsCreate } from "./positions/PositionsCreate";
import { PositionsEdit } from "./positions/PositionsEdit";
import { PositionsShow } from "./positions/PositionsShow";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { RolesList } from "./roles/RolesList";
import { RolesCreate } from "./roles/RolesCreate";
import { RolesEdit } from "./roles/RolesEdit";
import { RolesShow } from "./roles/RolesShow";
import { UserPositionsList } from "./userPositions/UserPositionsList";
import { UserPositionsCreate } from "./userPositions/UserPositionsCreate";
import { UserPositionsEdit } from "./userPositions/UserPositionsEdit";
import { UserPositionsShow } from "./userPositions/UserPositionsShow";
import { UserProjectsList } from "./userProjects/UserProjectsList";
import { UserProjectsCreate } from "./userProjects/UserProjectsCreate";
import { UserProjectsEdit } from "./userProjects/UserProjectsEdit";
import { UserProjectsShow } from "./userProjects/UserProjectsShow";
import { VacationsList } from "./vacations/VacationsList";
import { VacationsCreate } from "./vacations/VacationsCreate";
import { VacationsEdit } from "./vacations/VacationsEdit";
import { VacationsShow } from "./vacations/VacationsShow";
import { PaymentDetailsList } from "./paymentDetails/PaymentDetailsList";
import { PaymentDetailsCreate } from "./paymentDetails/PaymentDetailsCreate";
import { PaymentDetailsEdit } from "./paymentDetails/PaymentDetailsEdit";
import { PaymentDetailsShow } from "./paymentDetails/PaymentDetailsShow";
import { PaymentsList } from "./payments/PaymentsList";
import { PaymentsCreate } from "./payments/PaymentsCreate";
import { PaymentsEdit } from "./payments/PaymentsEdit";
import { PaymentsShow } from "./payments/PaymentsShow";
import { HolidaysList } from "./holidays/HolidaysList";
import { HolidaysCreate } from "./holidays/HolidaysCreate";
import { HolidaysEdit } from "./holidays/HolidaysEdit";
import { HolidaysShow } from "./holidays/HolidaysShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Employee Management System"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Positions"
          list={PositionsList}
          edit={PositionsEdit}
          create={PositionsCreate}
          show={PositionsShow}
        />
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="Roles"
          list={RolesList}
          edit={RolesEdit}
          create={RolesCreate}
          show={RolesShow}
        />
        <Resource
          name="UserPositions"
          list={UserPositionsList}
          edit={UserPositionsEdit}
          create={UserPositionsCreate}
          show={UserPositionsShow}
        />
        <Resource
          name="UserProjects"
          list={UserProjectsList}
          edit={UserProjectsEdit}
          create={UserProjectsCreate}
          show={UserProjectsShow}
        />
        <Resource
          name="Vacations"
          list={VacationsList}
          edit={VacationsEdit}
          create={VacationsCreate}
          show={VacationsShow}
        />
        <Resource
          name="PaymentDetails"
          list={PaymentDetailsList}
          edit={PaymentDetailsEdit}
          create={PaymentDetailsCreate}
          show={PaymentDetailsShow}
        />
        <Resource
          name="Payments"
          list={PaymentsList}
          edit={PaymentsEdit}
          create={PaymentsCreate}
          show={PaymentsShow}
        />
        <Resource
          name="Holidays"
          list={HolidaysList}
          edit={HolidaysEdit}
          create={HolidaysCreate}
          show={HolidaysShow}
        />
      </Admin>
    </div>
  );
};

export default App;
