"use client";

import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

import CardTable from "@/components/card-table";
import TableHeaderComponent from "@/components/card-table/table-header";
import PopoverComponent from "@/components/card-table/popover";
import { PersonalType } from "@/types/personal";
import { TableContext } from "@/contexts/TableContext";
import { getPersonal } from "@/api/personal";

const Personal = () => {
  const [data, setData] = useState<PersonalType[]>([]);

  useEffect(() => {
    // const newData: PersonalType[] = [
    //   {
    //     PERSONAL_ID: 1,
    //     CURRENT_FIRST_NAME: "John",
    //     CURRENT_LAST_NAME: "Doe",
    //     CURRENT_MIDDLE_NAME: "Smith",
    //     BIRTH_DATE: "01/01/1990",
    //     SOCIAL_SECURITY_NUMBER: "123-45-6789",
    //     DRIVERS_LICENSE: "123456789",
    //     CURRENT_ADDRESS_1: "123 Main St",
    //     CURRENT_ADDRESS_2: "",
    //     CURRENT_CITY: "New York",
    //     CURRENT_COUNTRY: "USA",
    //     CURRENT_ZIP: 10001,
    //     CURRENT_GENDER: "Male",
    //     CURRENT_PHONE_NUMBER: "123-456-7890",
    //     CURRENT_PERSONAL_EMAIL: "example@mail.com",
    //     CURRENT_MARITAL_STATUS: "Single",
    //     ETHNICITY: "Caucasian",
    //     SHAREHOLDER_STATUS: 1,
    //   },
    //   {
    //     PERSONAL_ID: 2,
    //     CURRENT_FIRST_NAME: "John",
    //     CURRENT_LAST_NAME: "Doe",
    //     CURRENT_MIDDLE_NAME: "Smith",
    //     BIRTH_DATE: "1985-03-15T00:00:00.000Z",
    //     SOCIAL_SECURITY_NUMBER: "123-45-6789",
    //     DRIVERS_LICENSE: "DL123456",
    //     CURRENT_ADDRESS_1: "123 Main St",
    //     CURRENT_ADDRESS_2: null,
    //     CURRENT_CITY: "Anytown",
    //     CURRENT_COUNTRY: "USA",
    //     CURRENT_ZIP: 12345,
    //     CURRENT_GENDER: "Male",
    //     CURRENT_PHONE_NUMBER: "555-1234",
    //     CURRENT_PERSONAL_EMAIL: "john.doe@example.com",
    //     CURRENT_MARITAL_STATUS: "Single",
    //     ETHNICITY: "Caucasian ",
    //     SHAREHOLDER_STATUS: 0,
    //   },
    // ];

    // setData(newData);

    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getPersonal();
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const refreshData = () => {
    console.log("refresh personal data");
    getData();
  };

  const HeaderPersonal = [
    "Personal ID",
    "First Name",
    "Last Name",
    "Middle Name",
    "Birth Date",
    "SSN",
    "Drivers License",
    "Address 1",
    "Address 2",
    "City",
    "Country",
    "Zip",
    "Gender",
    "Phone Number",
    "Personal Email",
    "Marital Status",
    "Ethnicity",
    "Shareholder Status",
  ];

  return (
    <TableContext.Provider value={{ refreshData }}>
      <CardTable title="Personal" description="Personal information">
        <Table>
          <TableHeaderComponent>
            {HeaderPersonal.map((header, index) => (
              <TableHead className="text-nowrap text-center" key={index}>
                {header}
              </TableHead>
            ))}
          </TableHeaderComponent>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="text-center text-nowrap py-1">
                  {row.PERSONAL_ID}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_FIRST_NAME}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_LAST_NAME}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_MIDDLE_NAME}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.BIRTH_DATE}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.SOCIAL_SECURITY_NUMBER}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.DRIVERS_LICENSE}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_ADDRESS_1}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_ADDRESS_2}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_CITY}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_COUNTRY}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_ZIP}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_GENDER}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_PHONE_NUMBER}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_PERSONAL_EMAIL}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.CURRENT_MARITAL_STATUS}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.ETHNICITY}
                </TableCell>
                <TableCell className="text-center text-nowrap py-1">
                  {row.SHAREHOLDER_STATUS ? "Yes" : "No"}
                </TableCell>
                <TableCell className="py-2">
                  <PopoverComponent type="personal" initialData={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardTable>
    </TableContext.Provider>
  );
};

export default Personal;
