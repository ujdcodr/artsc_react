const Loading = () => {
	return (
		<div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
			<div class="spinner-border text-light" role="status">
			<span class="sr-only"></span>
		</div>
		</div>
		
	);
};


export default Loading;

// import { ClipLoader } from "react-spinners";
// import React from "react";

// const Spinner = props => {
// 	const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
//   return (
//     <div style={style}>
//       <ClipLoader color={"#123abc"} loading={props.isFetching} />
//     </div>
//   );
// };

// export default Spinner;