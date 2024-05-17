"use client";

import { useState, useEffect } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Chart = () => {
  const [data, setData] = useState([
    {
      name: "Male",
      salary: 400,
    },
    {
      name: "Female",
      salary: 300,
    },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salary Chart</CardTitle>
        <CardDescription>This chart shows the salary</CardDescription>
      </CardHeader>
      <CardContent>
        <BarChart id="my-chart" width={300} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="salary" fill="#8884d8" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default Chart;
