import React from "react";
import { useDropzone } from "react-dropzone";

import "./index.css";

const Dropzone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  return (
    <section className="dropzone">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="text-center">
          <div>Click to upload</div>
          <div>new JPG</div>
        </div>
      </div>
    </section>
  );
};
export default Dropzone;
