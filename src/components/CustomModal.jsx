import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const CustomModal = ({ id }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);
  //   console.log(singleUser);

  // const handleClose = () => setShow(false);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                User Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Name: {singleUser[0].name}</p>
              <p>Email: {singleUser[0].email}</p>
              <p>Age: {singleUser[0].age}</p>
              <p>Gender: {singleUser[0].gender}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. even try to press escape
          key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default CustomModal;
