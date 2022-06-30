import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { usePostPlayerImageMutation } from "../../api/playersApi";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Dropzone = ({ playerId }) => {
  const [files, setFiles] = useState([]);
  const [postPlayerImage] = usePostPlayerImageMutation();

  const imageFormData = useRef(new FormData());

  const onDrop = useCallback(async (acceptedFiles) => {
    imageFormData.current.append("file", acceptedFiles[0]);
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
    const payload = await postPlayerImage({
      id: playerId,
      body: imageFormData.current,
    });
    if (payload) {
      window.location.reload();
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpg": [".jpg"],
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img
        className="dropzone-image"
        key={file.name}
        src={file.preview}
        alt={file.name}
      />
    </div>
  ));

  return (
    <div className="dropzone d-block mx-auto">
      <div
        {...getRootProps()}
        className="h-100 d-flex text-center justify-content-center align-items-center"
      >
        <input {...getInputProps()} />
        {thumbs.length ? (
          thumbs
        ) : (
          <div>
            <div>Click to upload new JPG</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Dropzone;
