export type Filter = "ALL" | "ACTIVE" | "DEACTIVATED";

export type FilterList = FilterItem[];

export type FilterItem = {
  value: Filter;
  label: string;
};

export type EmployeesList = Employee[];

export type Employee = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  profilePictureUrl: string;
  status: string;
};
