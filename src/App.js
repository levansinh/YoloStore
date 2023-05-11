import { Routes, Route } from "react-router-dom";

import { publicRouters } from "./routers/Routes";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRouters.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={ <Layout><Page /></Layout>} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
