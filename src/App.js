import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MachineBody from './components/MachineBody';
import { Provider } from "react-redux";
import store from "./store/appStore";


function App() {
	return (
		<Provider store={store}>
			<MachineBody />
		</Provider>
	);
}

export default App;
