import PhoneContainer from "./components/PhoneContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import TvContainer from "./components/TvContainer";
import CommentsContainer from "./components/CommentsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer />
        <TvContainer />
      </div>
      <CommentsContainer />
    </Provider>
  );
}

export default App;
