import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Error404 } from '../../assets'
import { Button } from '../../components'

export const Page404 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <img src={Error404} alt="404-error" />
      <h4 className="bold">I feel like maybe you should go back</h4>
      <p></p>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </div>
  );
}
