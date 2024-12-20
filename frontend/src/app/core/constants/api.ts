import { environment } from 'src/environments/environment';
type StringObject = {
  [key: string]: string;
};
export const apiRoutes: StringObject = {
  users: `${environment.apiUrl}users`,
  members: `${environment.apiUrl}members`,
  committes: `${environment.apiUrl}committes`,
  constants: `${environment.apiUrl}constants`,
  memberJobs: `${environment.apiUrl}memberJobs`,
  committeMembers: `${environment.apiUrl}committeMembers`,
  login: `${environment.apiUrl}auth/login`,
  register: `${environment.apiUrl}auth/register`,
};
