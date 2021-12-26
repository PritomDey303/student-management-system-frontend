import axios from "axios";
import { IMGBB_KEY } from "../SesnistiveVars";

const singleImgUploader = (imgFile) => {
  const imageData = new FormData();
  imageData.set("key", IMGBB_KEY);
  imageData.append("image", imgFile);
  console.log(imageData);
  axios
    .post("https://api.imgbb.com/1/upload", imageData)
    .then(function (response) {
      console.log(response.data.data.url);
      return response.data.data.url;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { singleImgUploader };
