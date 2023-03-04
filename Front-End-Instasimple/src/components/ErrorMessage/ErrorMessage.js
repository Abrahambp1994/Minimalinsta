import "./ErrorMessage.css";

import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="error-message">
      <h2>Error</h2>
      <p>{message}</p>
      <Link to={"/"}>Go home...</Link>
    </section>
  );
};
