import EmployeeImage from "./EmployeeImage";

export default function EmployeeListitem({ img, name, title }) {
  return (
    <div className="employeeName">
      <EmployeeImage img={img} />

      <div className="text">
        <h3 className="name">{name}</h3>
        <p className="title">{title} </p>
      </div>
    </div>
  );
}
