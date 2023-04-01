import {useContext, useMemo} from "react";
import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import {Context} from "./context";

function App() {
	// const [state, dispatch] = useReducer(reducer, initialState);
	const {state, dispatch} = useContext(Context);
	// debugger;
	// const [count, setCount] = useState();

	// const toggle = () => setCollapsed(!isCollapsed);
	// const toggle = (bool) => dispatch({type: "collapse", payload: {bool}});

	// const handleOnChange = (e) =>
	// 	dispatch({type: "setInputs", payload: {value: e}});

	// const handleOnSubmit = (e) => {
	// 	e.preventDefault();
	// 	dispatch({type: "setItem"});
	// 	toggle(!state.isCollapsed);
	// };

	const count = useMemo(() => {
		return `you have ${state.items.length} image${
			state.items.length > 1 ? "s" : ""
		}`;
	}, [state.items]);

	// useEffect(() => {
	// 	setCount(
	// 		`you have ${state.items.length} image${state.items.length > 1 ? "s" : ""}`
	// 	);
	// }, [state.items]);

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
