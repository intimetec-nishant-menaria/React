import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import { store } from './app/store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import DisplayTodos from './components/DisplayTodo/DisplayTodos.jsx'
import './index.css'
import App from './App.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<DisplayTodos/>} />
      <Route path='todo/:status' element={<DisplayTodos/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
