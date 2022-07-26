export interface UserLogin {
    username: string;
    password: string;
}

export interface UserLoginResult {
  access_token: string;
  refresh_token: string;
  status: number;
}

export interface UserRole {
  id: number;
  name: string;
}

export interface UserDetail {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    avatar: string;
    birthdate: string;
    country: string;
    phonenumber: string;
    authProvider: string;
    roles: UserRole[];
    teams: [];
    invitedTeams: [];
    templates: [];
}
