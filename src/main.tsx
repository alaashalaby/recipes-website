import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './app/store.ts'
import theme from './theme/index.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
