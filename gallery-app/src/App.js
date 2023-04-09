import {useContext, useEffect, useMemo} from "react";
import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import {Context} from "./context/FirestoreContext";
import {useAuthContext} from "./context/AuthContext";

function App() {
	const {state, read} = useContext(Context);
	const {authenticate} = useAuthContext();
	// debugger;

	const count = useMemo(() => {
		return `you have ${state.items.length} image${
			state.items.length > 1 ? "s" : ""
		}`;
	}, [state.items]);

	useEffect(() => {
		read();
		authenticate();
	}, []);

	return (
		<Layout
		// state={state}
		// onChange={handleOnChange}
		// onSubmit={handleOnSubmit}
		// toggle={toggle}
		>
			<h1 className="text-center">Gallery</h1>
			{count}
			<div className="row">
				{state.items.map((item, index) => (
					<Card key={index} {...item} />
				))}
			</div>
		</Layout>
	);
}

export default App;
