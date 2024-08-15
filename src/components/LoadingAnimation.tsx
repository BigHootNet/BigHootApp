import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/slices/loadingSlice';

const LoadingAnimation: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLoad = () => {
      dispatch(setLoading(false)); // Marquer la fin du chargement
    };

    if (document.readyState === 'complete') {
      // Si la page est déjà complètement chargée
      handleLoad();
    } else {
      // Écouteur pour l'événement de chargement complet de la page
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [dispatch]);

  return (
    <div className="loading-animation">
      <h1>Loading...</h1>
      {/* Ajoutez ici les éléments visuels de votre animation */}
    </div>
  );
};

export default LoadingAnimation;
