import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListComponent from "./ListComponent";

const ParentComponent = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showData) {
      setLoading(true);
      setError(null);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
          setTimeout(() => {
            setData(result);
            setLoading(false);
          }, 2000);
        })
        .catch((err) => {
          setError("failed to load Data");
          setLoading(false);
        });
    
    }
  }, [showData]);

  // function handleClick() {
  // setShowData(true);
  // }

  return (
    <div>
      <h1>API Call</h1>
      <button
        onClick={() => {
          setShowData(true);
        }}
      >
        Fetch Data
      </button>
      {loading && <p>Loading Data.....</p>}
      {error && <p>{error}</p>}

      <ListComponent listData={data} />
    </div>
  );
};

export default ParentComponent;
