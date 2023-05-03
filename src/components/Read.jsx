import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../feature/userDetailSlice";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div>
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
              <a href="#" className="card-link">
                View
              </a>
              <a href="#" className="card-link">
                Edit
              </a>
              <a href="#" className="card-link">
                Delete
              </a>
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
