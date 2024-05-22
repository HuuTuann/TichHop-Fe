import axios from "@/api/axios";

const getBirthday = async () => {
  return await axios.get("/getBeforeBirth");
};

export { getBirthday };
