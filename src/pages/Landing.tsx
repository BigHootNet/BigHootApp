import React from 'react';
import { useDispatch } from 'react-redux';
import { setLandingFinished, setLoading } from '../redux/slices/loadingSlice';

const Landing: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLandingFinished(true)); // Terminer la page de lancement
    dispatch(setLoading(true)); // Commencez l'animation de chargement
  };

  return (
    <div className="landing-page">
      <h1>Bienvenue</h1>
      <button onClick={handleClick}>Commencer</button>
    </div>
  );
};

export default Landing;
