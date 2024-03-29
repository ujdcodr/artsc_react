import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Loading from "../components/Loading";

const NewPost = () => {
	let [file, setFile] = useState();
	let [actualFile, setActualFile] = useState();
	let [category, setCategory] = useState();
    let [description,setDescription] = useState("");

	let [loading, setLoading] = useState(false);

    let navigate  = useNavigate();

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				setFile(e.target.result);
				setActualFile(event.target.files[0]);
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	const getCookie = (name) => {
		let cookieValue = null;
		if (document.cookie && document.cookie !== "") {
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + "=") {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	};

	const submit = () => {
		setLoading(true);
		let formdata = new FormData();
		formdata.append("image", actualFile);
        formdata.append("category_id",category.id)
        formdata.append("description",description)
		fetch("/social/api/upload_post/", {
			method: "POST",
			body: formdata,
			headers: {
				"X-CSRFToken": getCookie("csrftoken"),
			},
		})
			.then((data) => data.json())
			.then((data) => {
                console.log(data);
				if (data.successful === "successful") {
					setActualFile(null);
					setFile(null);
					setLoading(false);
                    setDescription("");
					navigate(`/social/category/${category.id}`)
				} else {
					alert(data.error);
				}
			})
			.catch((err) => console.log(err));
	};

	const get_category = () => {
		setLoading(true);
		let formdata = new FormData();
		formdata.append("file", actualFile);
		fetch("/social/api/predict_category/", {
			method: "POST",
			body: formdata,
			headers: {
				"X-CSRFToken": getCookie("csrftoken"),
			},
		})
			.then((data) => data.json())
			.then((data) => {
				setCategory(data.category);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	};

	const render_buttons = () => {
		if (!category && actualFile) {
			return (
				<div style={{ justifyContent: "center", textAlign: "center" }}>
					<button
						disabled={loading}
						onClick={() => get_category()}
						type="button"
						className="btn mt-3 btn-secondary btn-lg"
					>
						{loading ? (
							<div>
								<div className="spinner-border text-light" role="status">
									<span className="sr-only"></span>
								</div>
							</div>
						) : (
							"Get predicted category"
						)}
					</button>
				</div>
			);
		} else if (category) {
			return (
				<div style={{ justifyContent: "center", textAlign: "center" }}>
					<button
						onClick={() => submit()}
						disabled={loading}
						type="button"
						className="btn mt-3 btn-secondary btn-lg"
					>
						{loading ? (
							<div>
								<div className="spinner-border text-light" role="status">
									<span className="sr-only"></span>
								</div>
							</div>
						) : (
							"Submit"
						)}
					</button>
				</div>
			);
		} else {
			return <></>;
		}
	};

	return (
		<>
			<div className="container py-5">
				<header className="text-white text-center">
					<h1 className="display-4">Upload your artwork.</h1>
					<p className="lead mb-0">Please select a file from your local device..</p>
					<img
						src="https://bootstrapious.com/i/snippets/sn-img-upload/image.svg"
						alt=""
						width="150"
						className="mb-4"
					/>
				</header>

				<div className="row py-4">
					<div className="col-lg-6 mx-auto">
						<div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
							<input
								id="upload"
								onChange={onImageChange}
								type="file"
								className="form-control border-0"
							/>
							{/* <label id="upload-label" for="upload" className="font-weight-light text-muted">Choose file</label> */}
							<div className="input-group-append">
								<label for="upload" className="btn btn-light m-0 rounded-pill px-4">
									{" "}
									<i className="fa fa-cloud-upload mr-2 text-muted"></i>
									<small className="text-uppercase font-weight-bold text-muted">
										Choose file
									</small>
								</label>
							</div>
						</div>

						<p className="font-italic text-white text-center">
							The image uploaded will be rendered inside the box below.
						</p>
						<div className="image-area mt-4">
							<img
								id="imageResult"
								alt="Hello"
								src={file ? file : "#"}
								className="img-fluid rounded shadow-sm mx-auto d-block"
							/>
						</div>
						{category ? (
							<>
								<p className="font-italic text-white text-center">
									{category.display_name}
								</p>
								<div style={{ textAlign: "center", justifyContent: "center" }}>
									<input
                                        value={description}
                                        onChange={(event)=>setDescription(event.target.value)}
										type={"text"}
										placeholder="Write description here..."
									/>
								</div>
							</>
						) : (
							<></>
						)}
						{render_buttons()}
					</div>
				</div>
			</div>
		</>
	);
};
export default NewPost;
