import {
  Route,
  BrowserRouter,
  Routes,
  createBrowserRouter,
} from "react-router-dom";


 function App() {
      return (
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<navbarprincipal />}>
                  <Route index element={<pagina />} />
                  <Route path="novela/:clave" element={<pagina />} />
                </Route>
                <Route path="/login-admin" element={<navbarlogin />}>
                  <Route index element={<form />} />
                </Route>
                <Route path="/dashboard" element={<navbaradmin />}>
                  <Route index element={<paginaadmin />} />
                </Route>
              </Routes>
        </BrowserRouter>
      );
    }
    
    export default App;