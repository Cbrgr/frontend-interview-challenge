import { EmployeesList } from "./types";

export async function getEmployeeData(): Promise<EmployeesList> {
  const url = "http://localhost:9000/employees";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error: any) {
    console.error(error.message);
  }
  return [];
}
