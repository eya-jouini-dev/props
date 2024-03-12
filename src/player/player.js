import React from 'react';
import './player.css';

const Player = ({ nom, equipe, nationalite, numero_maillot, age, image_url }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image_url} className="card-img-top" alt={nom} />
      <div className="card-body">
        <h5 className="card-title">{nom}</h5>
        <p className="card-text">Equipe: {equipe}</p>
        <p className="card-text">Nationalité: {nationalite}</p>
        <p className="card-text">Numéro de maillot: {numero_maillot}</p>
        <p className="card-text">Age: {age}</p>
      </div>
    </div>
  );
}

export default Player;
