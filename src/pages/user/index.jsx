import { useParams } from 'react-router-dom'









export const SingleUser = ({results}) => {
  const { userId } = useParams();

  const user = results.find((user) => user.id.value === userId)
  

 
  return (
    <div className="singleUser">
      <img src={user?.picture.medium} alt="" />
      <p>
        {user?.name?.first} {user.name?.last}
      </p>
      <p>{user?.login?.username}</p>
      <p>{user?.email}</p>
      <p>{user?.location?.country}</p>
    </div>
  );
}
