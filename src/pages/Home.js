import React, { useEffect, useState } from "react";
import List from "../containers/List";
import { Spinner } from "react-bootstrap";
import { tasks } from "../api/task";
export default function Home() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTasks() {
    try {
      const response = await tasks();
      setData(response);
      setLoading(false);
    } catch (err) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(function () {
    getTasks();
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status" style={{ margin: "16px auto" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return <List tasksRes={data}></List>;
}
