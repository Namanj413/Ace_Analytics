import React from 'react';
import { Link } from 'react-router-dom';

const FourOFour = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.message}>Sorry, the page you are looking for might be in another castle.</p>
      <Link to="/" style={styles.btn}>Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    color: '#d9534f',
  },
  message: {
    color: '#777',
  },
  btn: {
    display: 'inline-block',
    padding: '10px 20px',
    marginTop: '20px',
    textDecoration: 'none',
    backgroundColor: '#337ab7',
    color: '#fff',
    borderRadius: '4px',
  },
};

export default FourOFour;
