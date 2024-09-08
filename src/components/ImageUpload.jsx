import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addImageMetadata,
  removeImageMetadata,
} from "../redux/slices/multiStepFormSlice";

const MAX_FILES = 6;

const ImageUpload = () => {
  const dispatch = useDispatch();
  const imageMetadata = useSelector((state) => state.vehicle.stepOne.images); // Metadata only
  const [files, setFiles] = useState([]); // Local state for File objects
  const [dragging, setDragging] = useState(false);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      const filesArray = Array.from(e.dataTransfer.files);

      if (imageMetadata.length + filesArray.length > MAX_FILES) {
        alert(`You can only upload up to ${MAX_FILES} images.`);
        return;
      }

      setFiles((prevFiles) => {
        const newFiles = [...prevFiles, ...filesArray];
        dispatch(
          addImageMetadata(
            filesArray.map((file) => ({
              name: file.name,
              size: file.size,
              type: file.type,
            }))
          )
        );
        return newFiles;
      });
    },
    [imageMetadata, dispatch]
  );

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);

    if (imageMetadata.length + filesArray.length > MAX_FILES) {
      alert(`You can only upload up to ${MAX_FILES} images.`);
      return;
    }

    setFiles((prevFiles) => {
      const newFiles = [...prevFiles, ...filesArray];
      dispatch(
        addImageMetadata(
          filesArray.map((file) => ({
            name: file.name,
            size: file.size,
            type: file.type,
          }))
        )
      );
      return newFiles;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((file) => file.name !== fileName);
      dispatch(removeImageMetadata(fileName));
      return updatedFiles;
    });
  };

  return (
    <div className='p-6 bg-white shadow-md rounded-md'>
      <h2 className='text-lg font-medium mb-4'>Add Vehicle Images</h2>
      <div
        className={`border-2 ${
          dragging ? "border-blue-500" : "border-dashed border-gray-300"
        } rounded-lg p-4 text-center`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className='flex flex-col items-center'>
          <img src='./upload-icon.svg' alt='Upload Icon' />
          <p className='text-gray-500 mb-2'>
            Drag and drop or choose files to upload
          </p>
          <p className='text-gray-400'>Select JPG or PNG</p>
          <input
            type='file'
            accept='.jpg,.png'
            multiple
            onChange={handleFileChange}
            className='mt-4'
          />
        </div>
      </div>
      <div className='mt-4'>
        {files.length > 0 && (
          <div>
            <h3 className='text-lg font-normal mb-2'>Uploaded Images:</h3>
            <div className='flex items-center space-x-2'>
              {files.map((file) => (
                <div key={file.name} className='relative'>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className='w-16 h-16 object-cover rounded-lg'
                  />
                  <button
                    onClick={() => handleRemoveFile(file.name)}
                    className='absolute gap-0 -top-1 -right-1 text-red-500 bg-white rounded-full p-1 border border-gray-300 flex items-center justify-center'
                    style={{ width: "16px", height: "16px" }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
