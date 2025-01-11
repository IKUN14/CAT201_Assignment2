import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="back-button" 
      onClick={() => navigate(-1)}
      aria-label="返回上一页"
    >
      ←
    </button>
  );
};

export default BackButton; 