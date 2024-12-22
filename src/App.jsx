import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Product from "./Product/Product";
import { Route, Routes } from "react-router-dom";
import Dessert from "./Desser/Dessert";

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Product />}/>
        <Route path="/dessert" element={<Dessert />}/>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
