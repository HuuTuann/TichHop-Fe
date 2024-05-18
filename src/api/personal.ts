import axios from "@/api/axios";
import { PersonalType } from "@/types/personal";

const savePersonal = async (data: PersonalType) => {
  console.log(data);

  return await axios.post("/api/personal", data);
};

// const getCaptcha = async () => {
//   return await axios.get("/api/generate-captcha");
// };

// const searchByTextField = async ({ data }) => {
//   return await axios.post("/api/personal", data);
// };

// const searchByPicture = async ({ picture }) => {
//   const formData = new FormData();
//   formData.append("picture", picture);
//   return await axios.post("/search", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };

// export { getCaptcha, searchByTextField, searchByPicture };
export { savePersonal };
