import { useState } from 'react';
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import { ErrorBoundary } from './helpers/ErrorBoundary';
import { useFetchUsers } from './hooks/useFetch';

import { Home, Page404, SingleUser, UsersUi } from './pages';



function App() {

   
   const [page, setPage] = useState(1);
   const { loading, error, data } = useFetchUsers(
     `https://randomuser.me/api/1.4/?page=${page}&results=10&seed=abc`
     

   );
 
  
   if (!loading && error) {
     return <p>Error</p>;
   }

   if (loading) {
     return <>Loading...</>;
   }

  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
          <Route
            path="/users"
            element={
              <UsersUi
                results={data?.results}
                loading={loading}
                page={page}
                setPage
                ={setPage} />
            }
          >
            <Route
              path="/users/:userId"
              element={<SingleUser results={data?.results} />}
            />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;


//No results found
//I feel like maybe you should go back
//Go Home
