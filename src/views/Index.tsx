import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductsTable from "../components/ProductsTable";

const Index = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsTable />
    </QueryClientProvider>
  );
};

export default Index;
