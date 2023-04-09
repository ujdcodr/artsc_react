import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/" onClick={(event)=>event.preventDefault()}>
				&nbsp; &nbsp; &nbsp; artSC
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<NavLink to={"/social/"} className="nav-link">
						Home Page <span className="sr-only"></span>
					</NavLink>

					<NavLink to={"/social/profile"} className="nav-link">
						Profile <span className="sr-only"></span>
					</NavLink>

					<NavLink to={"/social/new_post"} className="nav-link">
						New Post <span className="sr-only"></span>
					</NavLink>

					<NavLink to={"/social/network"} className="nav-link">
						Your Network <span className="sr-only"></span>
					</NavLink>

					<a className="nav-item nav-link" href="/logout">
						Log Out
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
