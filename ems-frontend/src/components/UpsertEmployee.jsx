import { useEffect, useState } from "react";
import { addEmployeesAPI, getEmployeeByIdAPI } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const UpsertEmployee = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "" });
	const navigate = useNavigate();
	const { id } = useParams();

	const handleSaveEmployee = (e) => {
		e.preventDefault();

		if (handleFormValidation()) {
			const employee = { firstName, lastName, email };
			console.log("Employee Data: ", employee);
			addEmployeesAPI(employee)
				.then((res) => {
					console.log(res.data);
					navigate("/");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const handleFormValidation = () => {
		let valid = true;
		const errorsCopy = { ...errors };

		if (firstName.trim()) {
			errorsCopy.firstName = "";
		} else {
			errorsCopy.firstName = "First Name is Required";
			valid = false;
		}

		if (lastName.trim()) {
			errorsCopy.lastName = "";
		} else {
			errorsCopy.lastName = "Last Name is Required";
			valid = false;
		}

		if (email.trim()) {
			errorsCopy.email = "";
		} else {
			errorsCopy.email = "Email is Required";
			valid = false;
		}

		setErrors(errorsCopy);

		return valid;
	};

	const handlePageTitle = () => {
		if (id) {
			return <h2 className="text-center">Update Employee</h2>;
		} else {
			return <h2 className="text-center">Add Employee</h2>;
		}
	};

	useEffect(() => {
		if (id) {
			getEmployeeByIdAPI(id)
				.then((res) => {
					setFirstName(res.data.firstName);
					setLastName(res.data.lastName);
					setEmail(res.data.email);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [id]);

	return (
		<div className="container">
			<div className="row">
				<div className="card col-md-6 offset-md-3 mt-5">
					{handlePageTitle()}
					<div className="card-body">
						<form action="">
							<div className="form-group mb-2">
								<label className="form-label">First Name</label>
								<input
									className={`form-control ${errors.firstName ? `is-invalid` : ""} `}
									type="text"
									name="firstName"
									id="firstName"
									placeholder="Enter first name"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
								{errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
							</div>

							<div className="form-group mb-2">
								<label className="form-label">Last Name</label>
								<input
									className={`form-control ${errors.lastName ? `is-invalid` : ""} `}
									type="text"
									name="lastName"
									id="lastName"
									placeholder="Enter last name"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
								{errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
							</div>

							<div className="form-group mb-2">
								<label className="form-label">Email</label>
								<input
									className={`form-control ${errors.email ? `is-invalid` : ""} `}
									type="text"
									name="email"
									id="email"
									placeholder="Enter email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								{errors.email && <div className="invalid-feedback">{errors.email}</div>}
							</div>

							<button className="btn btn-success" onClick={handleSaveEmployee}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpsertEmployee;
