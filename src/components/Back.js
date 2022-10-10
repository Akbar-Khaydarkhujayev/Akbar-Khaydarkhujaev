import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-outline-success position-fixed back-btn"
      onClick={() => {
        navigate(-1);
      }}
    >
      <i className="fa fa-chevron-left" aria-hidden="true"></i> Back
    </button>
  );
};

export default Back;
