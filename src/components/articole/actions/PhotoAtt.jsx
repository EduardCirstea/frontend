import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFileType } from "../../../utils/file";
import { addFiles } from "../../../features/articleSlice";

export default function PhotoAtt() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { files } = useSelector((state) => state.article);
  const imageHandler = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((file) => {
      if (
        file.type !== "image/png" &&
        file.type !== "image/jpeg" &&
        file.type !== "image/gif" &&
        file.type !== "image/webp" &&
        file.type !== "video/mp4" &&
        file.type !== "video/mpeg" &&
        file.type !== "video/webm" &&
        file.type !== "image/webm" &&
        file.type !== "image/webp"
      ) {
        files = files.filter((item) => item.name !== file.name);
        return;
      } else if (file.size > 1024 * 1024 * 10) {
        files = files.filter((item) => item.name !== file.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          dispatch(
            addFiles({
              file: file,
              fileData: e.target.result,
              type: getFileType(file.type),
            })
          );
        };
      }
    });
  };
  return (
    <div>
      <button
        type="button"
        className="photo-btn"
        onClick={() => inputRef.current.click()}
      >
        Add Photos
      </button>
      <input
        type="file"
        hidden
        multiple
        ref={inputRef}
        accept="image/png,image/jpeg,image/gif,image/webp,video/mp4,video/mpeg,video/webm"
        onChange={imageHandler}
      />
    </div>
  );
}
