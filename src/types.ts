export type Filter = "ALL" | "ACTIVE" | "DEACTIVATED";

export type FilterList = {
  value: Filter;
  label: string;
}[];

export type EmployeesList = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  profilePictureUrl: string;
  status: string;
}[];
