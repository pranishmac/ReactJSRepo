import React from 'react';
import { students } from '../utils/Constants';
import {useState} from 'react';

const Body = () => {

    
  
  return (
    <div style={styles.container}>
      {/* Search input and button */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by name"
          style={styles.input}
          
        />
        <button style={styles.button}>Search</button>
      </div>

      {/* Flex container for students */}
      <div style={styles.cardContainer}>
        {students.map((student) => (
          <div key={student.id} style={styles.card}>
            <h2>{student.name}</h2>
            <p>
              <strong>Age:</strong> {student.age}
            </p>
            <p>
              <strong>Major:</strong> {student.major}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  },
  searchContainer: {
    marginBottom: "20px"
  },
  input: {
    padding: "10px",
    marginRight: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  }
};

export default Body;
