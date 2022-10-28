import React  from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import './users.css'





export const UsersUi = ({ results, page,setPage }) => {
  const navigate = useNavigate();
  
  const total = results?.length;
 
  

  
  return (
    <div className="users">
      <h2> UsersUi</h2>

      <div className="users__list">
        {results.map((user, id) => {
          return (
            <div key={id} className="users__list--item">
              <p>
                {user.name?.first} {user.name?.last}
              </p>
              <Button onClick={() => navigate(`${user.id.value}`)}>
                View details
              </Button>
            </div>
          );
        })}
      </div>
      <div className="page__btns">
        <Button
          pagebtn
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        {Array.from({ length: total }, (value, index) => index + 1).map(
          (each) => (
            <Button pagebtn onClick={() => setPage(each)} disabled={page === each}>
              {each}
            </Button>
          )
        )}
        <Button
          pagebtn
          disabled={page >= total}
          aria-disabled={page >= total}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
      <Outlet />
      <Link to="/"> Retrun Home</Link>
    </div>
  );
}
