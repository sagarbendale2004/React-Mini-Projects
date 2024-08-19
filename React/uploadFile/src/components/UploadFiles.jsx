import React, { useState } from "react";

function UploadFile() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState("");
  const [showFile, setShowFile] = useState(false);

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileUrl = URL.createObjectURL(selectedFile);
      setFileURL(fileUrl);
    }
  };

  const handleClick = () => {
    setShowFile(true);
  };

  return (
    <>
      <input type="file" name="uploadFile" onChange={handleUpload} />
      <button onClick={handleClick}>Upload</button>
      {showFile && fileURL && (
        <img
          src={fileURL}
          alt="Uploaded file"
          style={{ width: "300px", height: "auto" }}
        />
      )}
    </>
  );
}

export default UploadFile;
