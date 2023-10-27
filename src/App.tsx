import * as React from 'react';
import timesheets from '../data/timesheets.json';
import users from '../data/users.json';
import UsersTable from './components/UsersTable';
import DataContext from './dataContext';
import "bootstrap/dist/css/bootstrap.css";

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <div>
      <DataContext.Provider value={{ users, timesheets }}>
        <UsersTable />
      </DataContext.Provider>

    </div>
  );
}
