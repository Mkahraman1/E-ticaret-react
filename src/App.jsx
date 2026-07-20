import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Products from "./components/Product";
import PageContainer from "./container/PageContainer";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <PageContainer>
      <Header />

      <Routes>
        <Route path="/" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </PageContainer>
  );
}

export default App;