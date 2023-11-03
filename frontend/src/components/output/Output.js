import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BsDownload } from "react-icons/bs";
import { downloadPDF } from "../../utils/APIUtils";
import "./Output.css";

const Output = (props) => {
  const [isClicked, setIsClicked] = React.useState(false);

  useEffect(() => {
    setIsClicked(false);
  }, []);

  const handleDownload = async () => {
    setIsClicked(true);
    downloadPDF(props?.response)
      .then((response) => {
        if (response && response.type === "application/pdf") {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(response);
          a.download = props?.response + "_details";
          a.click();
          URL.revokeObjectURL(a.href);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsClicked(false);
      });
  };

  return (
    <Modal
      show={props.show}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      onHide={props.onHide}
      centered
    >
      <Modal.Header closeButton className="output-header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex justify-content-center align-items-center flex-column w-100"
        >
          <strong>Predicted Output</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center align-items-center flex-column mb-3">
        <div className="">
          <img
            src={props?.imageFile[0]?.preview}
            className="preview"
            alt="uploaded img"
          />
        </div>
        <span className="mt-3">
          <h5>
            <b>{props?.response}</b>
          </h5>
        </span>
        {props?.response !== "Invalid image" && (
          <>
            <div className="mb-3">Click download to get the full report.</div>
            <div>
              <Button disabled={isClicked} onClick={() => handleDownload()}>
                {isClicked ? (
                  <>
                    <span className="spinner">
                      <Spinner animation="border" size="sm" />
                    </span>{" "}
                    Downloading...
                  </>
                ) : (
                  <>
                    Download <span className="ml-4"></span>
                    <BsDownload />
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Output;
