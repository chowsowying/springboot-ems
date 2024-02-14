import { useEffect, useState } from "react";
import { listEmployeesAPI } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
	const [employeeData, setEmployeeData] = useState([]);
	const navigate = useNavigate();

	const handleAddEmployee = () => {
		navigate("/add-employee");
	};

	const handleUpdateEmployee = (empId) => {
		navigate(`/edit-employee/${empId}`);
	};

	useEffect(() => {
		listEmployeesAPI()
			.then((res) => {
				setEmployeeData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="container">
			<h2 className="text-center my-4">List of Employees</h2>
			<button className="btn btn-primary mb-2" onClick={handleAddEmployee}>
				Add Employee
			</button>
			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<td>Id</td>
						<td>First Name</td>
						<td>Last Name</td>
						<td>Email</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
					{employeeData.map((emp) => (
						<tr key={emp.id}>
							<td>{emp.id}</td>
							<td>{emp.firstName}</td>
							<td>{emp.lastName}</td>
							<td>{emp.email}</td>
							<td>
								<button className="btn btn-info" onClick={() => handleUpdateEmployee(emp.id)}>
									Update
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListEmployee;
