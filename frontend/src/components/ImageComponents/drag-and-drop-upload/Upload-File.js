import { useDropzone } from "react-dropzone";
import "./Upload-File.css";

const UploadFiles = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpg, image/jpeg, image/png",
    onDrop: (acceptedFiles) => {
      props.setImageFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  return (
    <>
      <div {...getRootProps({ className: "upload-file-dropzone" })}>
        <input id="upload-file-dropzone" {...getInputProps()} />
        <img
          src="https://freepik.cdnpk.net/img/search/search-by-image-hover.svg"
          className={"upload-file-dropzone-img"}
          alt="No Uploads"
        />
        <div className={"upload-file-dropzone-title"}>
          Drop {props.type} here, or
          <div className={"upload-file-dropzone-title-browse"}>Browse</div>*
        </div>
        <div className={"upload-file-dropzone-supported-formats"}>
          Supports: JPG, JPEG, PNG
        </div>
      </div>
    </>
  );
};

export default UploadFiles;
