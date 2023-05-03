import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../feature/userDetailSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="text-center mt-5">User Data</h2>
      {users && users.length > 0 ? (
        users.map((ele) => (
          <div className="card w-50 mt-3 mx-auto" key={ele.id}>
            <div className="card-body">
              <h5 className="card-title">Name: {ele.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Email: {ele.email}
              </h6>
              <p className="card-text">Age: {ele.age}</p>
              <p className="card-text">Gender: {ele.gender}</p>
              <button
                type="button"
                className="btn btn-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => [setId(ele.id), setShowPopup(true)]}
              >
                View
              </button>
              <Link className="btn btn-warning me-3">Edit</Link>
              <Link
                className="btn btn-danger"
                onClick={() => dispatch(deleteUser(ele.id))}
              >
                Delete
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-center mt-5">No Data Found!</h2>
      )}
    </div>
  );
};

export default Read;
