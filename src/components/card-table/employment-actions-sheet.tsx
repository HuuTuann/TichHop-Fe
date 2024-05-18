import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EmploymentType } from "@/types/employment";

type ActionsSheetType = {
  action: "edit" | "add";
  initialData: EmploymentType;
};

export const EmploymentActionsSheet = ({
  action,
  initialData,
}: ActionsSheetType) => {
  const [data, setData] = useState<EmploymentType>(initialData);

  const handleChange = (
    key: keyof EmploymentType,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn("w-full justify-start", {
            "w-28 justify-center bg-blue-600 hover:bg-blue-500 text-white hover:text-white":
              action === "add",
          })}
        >
          {action === "edit" ? "Edit" : "Add"}
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader className="">
          <SheetTitle>Employment</SheetTitle>
          <SheetDescription>
            {action === "edit"
              ? "Edit the employment information for this person."
              : "Add a new person."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-4 gap-4 px-10 pt-2">
          <div className="space-y-2">
            <Label>Employment ID</Label>
            <Input
              value={data.EMPLOYMENT_ID}
              onChange={(e) => handleChange("EMPLOYMENT_ID", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Employment Code</Label>
            <Input
              value={data.EMPLOYMENT_CODE}
              onChange={(e) => handleChange("EMPLOYMENT_CODE", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Employment Status</Label>
            <Input
              value={data.EMPLOYMENT_STATUS}
              onChange={(e) => handleChange("EMPLOYMENT_STATUS", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Hire Date for Working</Label>
            <Input
              value={data.HIRE_DATE_FOR_WORKING}
              onChange={(e) => handleChange("HIRE_DATE_FOR_WORKING", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Workers Comp Code</Label>
            <Input
              value={data.WORKERS_COMP_CODE}
              onChange={(e) => handleChange("WORKERS_COMP_CODE", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Termination Date</Label>
            <Input
              value={String(data.TERMINATION_DATE ? data.TERMINATION_DATE : "")}
              onChange={(e) => handleChange("TERMINATION_DATE", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Rehire Date for Working</Label>
            <Input
              value={String(
                data.REHIRE_DATE_FOR_WORKING ? data.REHIRE_DATE_FOR_WORKING : ""
              )}
              onChange={(e) => handleChange("REHIRE_DATE_FOR_WORKING", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Last Review Date</Label>
            <Input
              value={String(data.LAST_REVIEW_DATE ? data.LAST_REVIEW_DATE : "")}
              onChange={(e) => handleChange("LAST_REVIEW_DATE", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Number of Days Requirement of Working per Month</Label>
            <Input
              value={data.NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH}
              onChange={(e) =>
                handleChange("NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH", e)
              }
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <SheetClose asChild>
            <Button variant={"ghost"}>Cancel</Button>
          </SheetClose>
          {action === "edit" ? (
            <SheetClose asChild>
              <Button className="bg-blue-600 hover:bg-blue-500 hover:text-white text-white">
                Save
              </Button>
            </SheetClose>
          ) : (
            <SheetClose asChild>
              <Button
                className="bg-blue-600 hover:bg-blue-500 hover:text-white text-white"
                variant={"ghost"}
              >
                Add
              </Button>
            </SheetClose>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
