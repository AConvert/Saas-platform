export interface SessionPayload {
  userId: string;
  [key: string]: string | number | boolean;
}

export interface UserData {
  username: string | null;
  email: string | null;
  password: string | number | null;
}
