import { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import styled from 'styled-components';

import { ExchangeForm } from './ExchangeForm';
import { DataPreview } from './DataPreview';

const AppContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
`
const AppContent = styled.div`
    width: var(--content-width);
    max-width: var(--content-max-width);
    display: flex;
    flex-flow: column;
    align-items: center;
`

const queryClient = new QueryClient()
 
const App: FunctionComponent = () => (
    <QueryClientProvider client={queryClient}>
        <AppContainer>
            <AppContent>
                <DataPreview />
                <ExchangeForm />
            </AppContent>
        </AppContainer>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
)
 

export default App;
