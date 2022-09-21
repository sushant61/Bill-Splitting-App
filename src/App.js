import Loading from "./Components/loading";
import Register from "./Components/register";
import Login from "./Components/login";
import { useGlobalContext } from "./Context";
import Payments from "./Components/payments";
function App() {
  const { loading, login } = useGlobalContext();
  if (loading) {
    return <Loading />;
  } else if (login) {
    return <Login />;
  } else {
    return (
      <>
        <Register />
        <Payments />
      </>
    );
  }
}
export default App;
