import './App.css'
import { MainContainer } from './shared/components/mainContainer'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}