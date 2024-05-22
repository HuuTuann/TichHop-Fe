import { getBirthday } from "@/api/birthday";
import { useEffect, useState } from "react";

type Data = {
  BIRTH_DATE: string;
  CURRENT_FIRST_NAME: string;
  CURRENT_LAST_NAME: string;
  CURRENT_MIDDLE_NAME: string;
}[];

const Notification = () => {
  const [data, setData] = useState<Data>([]);

  const [hidden, setHidden] = useState(true);

  const getBirthdayNow = async () => {
    try {
      const response = await getBirthday();
      console.log(response);
      console.log(response.data.result);

      setData(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBirthdayNow();
    setTimeout(() => {
      setHidden(false);
    }, 5000);
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <>
      {data.map((item, i) => (
        <div
          key={i}
          className="absolute top-4 right-5 p-4 bg-slate-100 rounded"
        >
          <h1>{`Sắp đến ngày sinh nhật: ${item?.CURRENT_MIDDLE_NAME} ${item?.CURRENT_FIRST_NAME} ${item?.CURRENT_LAST_NAME}`}</h1>
          <p>{`Ngày: ${item?.BIRTH_DATE}`}</p>
        </div>
      ))}
    </>
    // <div className="absolute top-4 right-5 p-4 bg-slate-100 rounded">
    //   <h1>{`Sắp đến ngày sinh nhật: ${data[0]?.CURRENT_MIDDLE_NAME} ${data[0]?.CURRENT_FIRST_NAME} ${data[0]?.CURRENT_LAST_NAME}`}</h1>
    //   <p>{`Ngày: ${data[0]?.BIRTH_DATE}`}</p>
    // </div>
  );
};

export default Notification;
