import React, {Fragment, useContext} from "react";
import NavBar from "./NavBar";
import UploadForm from "./UploadForm";
import {Context} from "../context";

function Layout({children}) {
	const {state, dispatch} = useContext(Context);
	const toggle = (bool) => dispatch({type: "collapse", payload: {bool}});

	return (
		<Fragment>
			<NavBar />
			<div className="container  mt-5">
				<button
					className="btn btn-success float-end"
					onClick={() => toggle(!state.isCollapsed)}
				>
					{state.isCollapsed ? "Close" : "+ Add"}
				</button>
				<div className="clearfix mb-4"></div>
				<UploadForm
					inputs={state.inputs}
					isVisible={state.isCollapsed}
					// onChange={onChange}
					// onSubmit={onSubmit}
				/>
				{children}
			</div>
		</Fragment>
	);
}

export default Layout;
