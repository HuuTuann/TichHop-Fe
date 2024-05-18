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
import { TableContext } from "@/contexts/TableContext";
import { EmploymentType } from "@/types/employment";

const Employment = () => {
  const [data, setData] = useState<EmploymentType[]>([]);

  useEffect(() => {
    const newData: EmploymentType[] = [
      {
        EMPLOYMENT_ID: 1,
        EMPLOYMENT_CODE: "EMP-01",
        EMPLOYMENT_STATUS: "Active",
        HIRE_DATE_FOR_WORKING: "2021-09-01",
        WORKERS_COMP_CODE: "WCC-01",
        TERMINATION_DATE: null,
        REHIRE_DATE_FOR_WORKING: null,
        LAST_REVIEW_DATE: null,
        NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH: 30,
      },
      {
        EMPLOYMENT_ID: 2,
        EMPLOYMENT_CODE: "EMP-02",
        EMPLOYMENT_STATUS: "Inactive",
        HIRE_DATE_FOR_WORKING: "2021-09-01",
        WORKERS_COMP_CODE: "WCC-02",
        TERMINATION_DATE: "2021-09-30",
        REHIRE_DATE_FOR_WORKING: null,
        LAST_REVIEW_DATE: null,
        NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH: 30,
      },
    ];

    setData(newData);
  }, []);

  const refreshData = () => {
    console.log("refresh employment data");
  };

  const HeaderEmployment = [
    "Employment ID",
    "Employment Code",
    "Employment Status",
    "Hire Date for Working",
    "Workers Comp Code",
    "Termination Date",
    "Rehire Date for Working",
    "Last Review Date",
    "Number of Days Requirement of Working per Month",
  ];

  return (
    <CardTable title="Employment" description="Employment information">
      <Table>
        <TableHeaderComponent>
          {HeaderEmployment.map((header, index) => (
            <TableHead className="text-nowrap" key={index}>
              {header}
            </TableHead>
          ))}
        </TableHeaderComponent>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="text-center text-nowrap py-1">
                {row.EMPLOYMENT_ID}
              </TableCell>
              <TableCell className="text-center text-nowrap py-1">
                {row.EMPLOYMENT_CODE}
              </TableCell>
              <TableCell className="text-center text-nowrap py-1">
                {row.EMPLOYMENT_STATUS}
              </TableCell>
              <TableCell className="text-center text-nowrap py-1">
                {row.HIRE_DATE_FOR_WORKING}
              </TableCell>
              <TableCell className="text-center text-nowrap py-1">
                {row.WORKERS_COMP_CODE}
              </TableCell>
              <TableCell className="text-center text-nowrap py-1">
                {row.TERMINATION_DATE}
              </TableCell>
              <TableCell className="text-center text-nowrap py-1">
                {row.REHIRE_DATE_FOR_WORKING}
              </TableCell>
              <TableCell className="text-center text-nowrap py-1">
                {row.LAST_REVIEW_DATE}
              </TableCell>
              <TableCell className="text-center text-nowrap py-1">
                {row.NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH}
              </TableCell>
              <TableCell className="py-2">
                <TableContext.Provider
                  value={{
                    refreshData,
                  }}
                >
                  <PopoverComponent type="employment" initialData={row} />
                </TableContext.Provider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardTable>
  );
};

export default Employment;
