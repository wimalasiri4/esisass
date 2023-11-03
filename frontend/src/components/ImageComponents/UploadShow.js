import React from "react";
import { Button, Spinner } from "react-bootstrap";
import imageCompression from "browser-image-compression";
import ImageOverlay from "./ImageOverlay";
import UploadFiles from "./drag-and-drop-upload/Upload-File";
import Output from "../output/Output";
import { predict } from "../../utils/APIUtils";
import "./UploadShow.css";

const UploadShow = (props) => {
  const { imageFile, setImageFile, handleDeleteImage } = props;
  const [modalShow, setModalShow] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [response, setResponse] = React.useState("");

  const compressImage = async (image) => {
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    if (options.maxSizeMB >= image.size / (1024 * 1024)) {
      return image;
    } else {
      try {
        const compressedImage = await imageCompression(image, options);
        return compressedImage;
      } catch (error) {
        console.error("Image compression failed:", error);
        return null;
      }
    }
  };

  const handleSubmit = async () => {
    if (imageFile) {
      setIsSubmitted(true);
      console.log("image.size: ", imageFile[0].size);
      const compressed = await compressImage(imageFile[0]);
      if (compressed) {
        console.log("Compressed image:", compressed);
        predict(compressed)
          .then((responseData) => {
            setResponse(responseData?.class);
            handleShow();
            setIsSubmitted(false);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setIsSubmitted(false);
          });
      } else {
        setIsSubmitted(false);
        alert("Image compression failed.");
      }
    } else {
      alert("No image selected.");
    }
  };

  const handleShow = () => {
    setModalShow(true);
  };

  const handleHide = () => {
    handleDelete();
    setResponse("");
    setModalShow(false);
  };

  const handleDelete = () => {
    setIsSubmitted(false);
    handleDeleteImage();
  };

  return (
    <>
      <Output
        show={modalShow}
        onHide={() => handleHide()}
        imageFile={imageFile}
        response={response}
      />
      <div className="mb-5">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="dropzone">
            {imageFile.length ? (
              <>
                <img
                  src={imageFile[0].preview}
                  className="preview"
                  alt="uploaded img"
                />
                <ImageOverlay handleDeleteImage={handleDeleteImage} />
              </>
            ) : (
              <div className="upload-image">
                <UploadFiles
                  id="upload-files"
                  type="Animal Image"
                  setImageFile={setImageFile}
                />
              </div>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ marginRight: "40px" }}>
            <Button
              className="custom-button"
              variant="primary"
              disabled={imageFile[0] == null || isSubmitted}
              onClick={() => handleSubmit()}
            >
              {isSubmitted && (
                <span className="spinner">
                  <Spinner animation="border" size="sm" />
                </span>
              )}
              Check
            </Button>
          </div>
          <div>
            <Button
              className="custom-button"
              variant="danger"
              onClick={() => handleDelete()}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadShow;
