import axios from "@/api/axios";
import { PersonalType } from "@/types/personal";

const getPersonal = async () => {
  return await axios.get("/getPersonal");
};

const addPersonal = async (data: PersonalType) => {
  const initData = {
    CURRENT_FIRST_NAME: "John",
    CURRENT_LAST_NAME: "Doe",
    CURRENT_MIDDLE_NAME: "Smith",
    BIRTH_DATE: "1985-03-15",
    SOCIAL_SECURITY_NUMBER: "6789",
    DRIVERS_LICENSE: "DL123456",
    CURRENT_ADDRESS_1: "123 Main St",
    CURRENT_ADDRESS_2: "123 Main St",
    CURRENT_CITY: "Anytown",
    CURRENT_COUNTRY: "USA",
    CURRENT_ZIP: 12345,
    CURRENT_GENDER: "Male",
    CURRENT_PHONE_NUMBER: "555-1234",
    CURRENT_PERSONAL_EMAIL: "john.doe@example.com",
    CURRENT_MARITAL_STATUS: "Single",
    ETHNICITY: "Caucasian ",
    SHAREHOLDER_STATUS: 0,
  };

  const newData = { ...initData };

  console.log(newData);

  return await axios.post("/postPersonal", data);
};

const updatePersonal = async (data: PersonalType) => {
  return await axios.put(`/putPersonal/${data.PERSONAL_ID}`, data);
};

const deletePersonal = async (id: number) => {
  return await axios.delete(`/deletePersonal/${id}`);
};

export { getPersonal, addPersonal, updatePersonal, deletePersonal };
