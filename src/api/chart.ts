import axios from "@/api/axios";

const getVacationDayByYear = async (year: number) => {
  return await axios.get(`/getVacationDayByYear/${year}`);
};

const getTotalByGender = async (year: number) => {
  return await axios.get(`/totalByGender/${year}`);
};

export { getVacationDayByYear, getTotalByGender };
