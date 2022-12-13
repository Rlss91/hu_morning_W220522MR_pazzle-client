import { useState, useEffect } from "react";
import axios from "axios";

const PuzlePage = () => {
  const [puzzle, setPuzzle] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/puzzle");
        setPuzzle(data);
        console.log("🚀 ~ file: App.jsx:11 ~ data", data);
      } catch (err) {}
    })();
  }, []);
  const handleDeleteClick = async (id) => {
    console.log("🚀 ~ file: PuzlePage.jsx:16 ~ handleDeleteClick ~ id", id);
    try {
      await axios.delete(`/puzzle/${id}`);
      let newPuzzle = JSON.parse(JSON.stringify(puzzle));
      newPuzzle = newPuzzle.filter((item) => item._id !== id);
      setPuzzle(newPuzzle);
    } catch (err) {}
  };
  return (
    <ul className="list-group">
      {puzzle.map((item) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={item._id}
        >
          {item.name}
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDeleteClick(item._id);
            }}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PuzlePage;
