import { createContext } from 'react';

export interface IAppContext {
  users: IUser[];
  timesheets: ITimesheet[];
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: IAvatar
}

export interface ITimesheet {
  id: string;
  userId: string;
  companyId: string;
  startTime: string;
  endTime: string;
  minutes: number;
  breakMinutes: number;
  status: string;
}

export interface IAvatar {
  link: string;
}

export default createContext<IAppContext>({ users: [], timesheets: [] });