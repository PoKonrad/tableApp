import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductsTable from '../components/ProductsTable';
import ProductsModal from '../components/PoductsModal';

const Index = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsModal />
      <ProductsTable />
    </QueryClientProvider>
  );
};

export default Index;
