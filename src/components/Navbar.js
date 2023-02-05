import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="/" onClick={(event)=>event.preventDefault()}>
				&nbsp; &nbsp; &nbsp; artSC
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<NavLink to={"/social/"} className="nav-link">
						Home Page <span class="sr-only"></span>
					</NavLink>

					<NavLink to={"/social/profile"} className="nav-link">
						Profile <span class="sr-only"></span>
					</NavLink>

					<NavLink to={"/social/new_post"} className="nav-link">
						New Post <span class="sr-only"></span>
					</NavLink>

					<a class="nav-item nav-link" href="/logout">
						Log Out
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
