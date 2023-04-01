import {Fragment, useState} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";

const photos = [
	"https://picsum.photos/id/1001/200/200",
	"https://picsum.photos/id/1002/200/200",
	"https://picsum.photos/id/1003/200/200",
	"https://picsum.photos/id/1004/200/200",
	"https://picsum.photos/id/1005/200/200",
	"https://picsum.photos/id/1006/200/200",
];

function App() {
	const [items, setItems] = useState(photos);
	const [isCollapsed, setCollapsed] = useState(false);

	const toggle = () => setCollapsed(!isCollapsed);
	return (
		<Fragment>
			<NavBar />
			<div className="container text-center mt-5">
				<button className="btn btn-success float-end" onClick={toggle}>
					{isCollapsed ? "Close" : "+ Add"}
				</button>
				<div className="clearfix mb-4"></div>
				<UploadForm isVisible={isCollapsed} />
				<h1>Gallery</h1>
				<div className="row">
					{items.map((photo) => {
						return <Card src={photo} />;
					})}
				</div>
			</div>
		</Fragment>
	);
}

export default App;
