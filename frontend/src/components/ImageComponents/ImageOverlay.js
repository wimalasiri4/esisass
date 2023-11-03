import React from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";

const ImageOverlay = (props) => {
  const { handleDeleteImage } = props;
  return (
    <div className="preview-overlay">
      <PencilFill
        fill="#000000"
        size={20}
        className="preview-overlay-edit"
        onClick={() => handleDeleteImage()}
      ></PencilFill>
      <TrashFill
        fill="#000000"
        size={20}
        className="preview-overlay-delete"
        onClick={() => handleDeleteImage()}
      ></TrashFill>
    </div>
  );
};

export default ImageOverlay;
