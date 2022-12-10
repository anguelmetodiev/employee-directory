import EmployeeListitem from "./EmployeeListitem";
import employeeArr from "../data";

const employees = employeeArr.map((ele, idx) => {
  return <EmployeeListitem key={idx} {...ele} />;
});

export default function EmployeeList() {
  return <div className="employeeList">{employees}</div>;
}
