import React, { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import styled from 'styled-components';
import { Table } from './Table';

const AppContainer = styled.div`
  // TODO: style
`

const queryClient = new QueryClient()
 
const App: FunctionComponent = () => {

  return (
     <QueryClientProvider client={queryClient}>
        <AppContainer>
          <Table />
          {/* <ExchangeForm /> //TODO: form for rate calculation */}
        </AppContainer>
        <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
   )
 }
 

export default App;
