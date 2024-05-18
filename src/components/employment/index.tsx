"use client";

import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type EmploymentType = {
  EMPLOYMENT_ID: number; // ID duy nhất cho mỗi công việc.
  EMPLOYMENT_CODE: string; // Mã công việc.
  EMPLOYMENT_STATUS: string; // Tình trạng công việc.
  HIRE_DATE_FOR_WORKING: string; // Ngày bắt đầu làm việc.
  WORKERS_COMP_CODE: string; // Mã bảo hiểm lao động.
  TERMINATION_DATE: string | null; // Ngày kết thúc công việc.
  REHIRE_DATE_FOR_WORKING: string | null; // Ngày tái tuyển dụng.
  LAST_REVIEW_DATE: string | null; // Ngày đánh giá gần nhất.
  NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH: number; // Số ngày yêu cầu làm việc mỗi tháng.
};

const Employment = () => {
  const [data, setData] = useState<EmploymentType[]>([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch("/api/personal");
    //   const data = await response.json();
    //   setData(data);
    // };
    // fetchData();

    const newData: EmploymentType[] = [];

    setData(newData);
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Personal information is the data that is associated with a specific
          individual.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-min w-full">
          <Table>
            <TableHeader>
              <TableRow>
                {data &&
                  data[0] &&
                  Object.keys(data[0]).map((key, index) => (
                    <TableHead
                      key={index}
                      className="w-min text-nowrap text-center"
                    >
                      {key}
                    </TableHead>
                  ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((row, index) => (
                <TableRow key={index}></TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Employment;
