import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PropsWithChildren } from "react";

const TableHeaderComponent = ({ children }: PropsWithChildren) => {
  return (
    <TableHeader>
      <TableRow>
        {children}
        <TableHead />
      </TableRow>
    </TableHeader>
  );
};

export default TableHeaderComponent;
