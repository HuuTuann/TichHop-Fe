// "use client";

// import { useState, useEffect } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { Button } from "@/components/ui/button";

// type PersonalType = {
//   PERSONAL_ID: number; // ID duy nhất cho mỗi cá nhân.
//   CURRENT_FIRST_NAME: string; // Họ tên đầy đủ.
//   CURRENT_LAST_NAME: string; // Họ tên đầy đủ.
//   CURRENT_MIDDLE_NAME: string; // Họ tên đầy đủ.
//   BIRTH_DATE: string; // Ngày sinh.
//   SOCIAL_SECURITY_NUMBER: string; // Số an sinh xã hội.
//   DRIVERS_LICENSE: string; // Số giấy phép lái xe.
//   CURRENT_ADDRESS_1: string; // Địa chỉ hiện tại.
//   CURRENT_ADDRESS_2: string | null; // Địa chỉ hiện tại.
//   CURRENT_CITY: string; // Thành phố hiện tại.
//   CURRENT_COUNTRY: string; // Quốc gia hiện tại.
//   CURRENT_ZIP: number; // Mã bưu điện hiện tại.
//   CURRENT_GENDER: string; // Giới tính hiện tại.
//   CURRENT_PHONE_NUMBER: string; // Số điện thoại hiện tại.
//   CURRENT_PERSONAL_EMAIL: string; // Email cá nhân hiện tại.
//   CURRENT_MARITAL_STATUS: string; // Tình trạng hôn nhân.
//   ETHNICITY: string; // Dân tộc.
//   SHAREHOLDER_STATUS: 0 | 1; // Tình trạng cổ đông.
// };

// const Personal = () => {
//   const [data, setData] = useState<PersonalType[]>([]);

//   useEffect(() => {
//     const newData: PersonalType[] = [
//       {
//         PERSONAL_ID: 1,
//         CURRENT_FIRST_NAME: "John",
//         CURRENT_LAST_NAME: "Doe",
//         CURRENT_MIDDLE_NAME: "Smith",
//         BIRTH_DATE: "01/01/1990",
//         SOCIAL_SECURITY_NUMBER: "123-45-6789",
//         DRIVERS_LICENSE: "123456789",
//         CURRENT_ADDRESS_1: "123 Main St",
//         CURRENT_ADDRESS_2: "",
//         CURRENT_CITY: "New York",
//         CURRENT_COUNTRY: "USA",
//         CURRENT_ZIP: 10001,
//         CURRENT_GENDER: "Male",
//         CURRENT_PHONE_NUMBER: "123-456-7890",
//         CURRENT_PERSONAL_EMAIL: "example@mail.com",
//         CURRENT_MARITAL_STATUS: "Single",
//         ETHNICITY: "Caucasian",
//         SHAREHOLDER_STATUS: 1,
//       },
//       {
//         PERSONAL_ID: 2,
//         CURRENT_FIRST_NAME: "John",
//         CURRENT_LAST_NAME: "Doe",
//         CURRENT_MIDDLE_NAME: "Smith",
//         BIRTH_DATE: "1985-03-15T00:00:00.000Z",
//         SOCIAL_SECURITY_NUMBER: "123-45-6789",
//         DRIVERS_LICENSE: "DL123456",
//         CURRENT_ADDRESS_1: "123 Main St",
//         CURRENT_ADDRESS_2: null,
//         CURRENT_CITY: "Anytown",
//         CURRENT_COUNTRY: "USA",
//         CURRENT_ZIP: 12345,
//         CURRENT_GENDER: "Male",
//         CURRENT_PHONE_NUMBER: "555-1234",
//         CURRENT_PERSONAL_EMAIL: "john.doe@example.com",
//         CURRENT_MARITAL_STATUS: "Single",
//         ETHNICITY: "Caucasian ",
//         SHAREHOLDER_STATUS: 0,
//       },
//     ];

//     setData(newData);
//   }, []);

//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <CardTitle>Personal Information</CardTitle>
//         <CardDescription>
//           Personal information is the data that is associated with a specific
//           individual.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ScrollArea className="h-min w-full">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 {data &&
//                   data[0] &&
//                   Object.keys(data[0]).map((key, index) => (
//                     <TableHead
//                       key={index}
//                       className="w-min text-nowrap text-center"
//                     >
//                       {key}
//                     </TableHead>
//                   ))}
//                 <TableHead />
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {data?.map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell className="text-center text-nowrap">
//                     {row.PERSONAL_ID}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_FIRST_NAME}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_LAST_NAME}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_MIDDLE_NAME}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.BIRTH_DATE}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.SOCIAL_SECURITY_NUMBER}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.DRIVERS_LICENSE}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_ADDRESS_1}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_ADDRESS_2}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_CITY}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_COUNTRY}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_ZIP}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_GENDER}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_PHONE_NUMBER}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_PERSONAL_EMAIL}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.CURRENT_MARITAL_STATUS}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.ETHNICITY}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     {row.SHAREHOLDER_STATUS ? "Yes" : "No"}
//                   </TableCell>
//                   <TableCell className="text-center text-nowrap">
//                     <Popover>
//                       <PopoverTrigger>
//                         <Button variant={"ghost"} size={"icon"}>
//                           <BsThreeDotsVertical />
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent>
//                         <Card>
//                           <CardContent>
//                             <p>View</p>
//                             <p>Edit</p>
//                             <p>Delete</p>
//                           </CardContent>
//                         </Card>
//                       </PopoverContent>
//                     </Popover>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <ScrollBar orientation="horizontal" />
//         </ScrollArea>
//       </CardContent>
//     </Card>
//   );
// };

// export default Personal;
