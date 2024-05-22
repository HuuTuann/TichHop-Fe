import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PersonalType } from "@/types/personal";
import { addPersonal, updatePersonal } from "@/api/personal";
import { useContext } from "react";

import { TableContext } from "@/contexts/TableContext";

import { cn } from "@/lib/utils";

type ActionsSheetType = {
  action: "edit" | "add";
  initialData: PersonalType;
};

export const PersonalActionsSheet = ({
  action,
  initialData,
}: ActionsSheetType) => {
  const [data, setData] = useState<PersonalType>(initialData);
  const { refreshData } = useContext(TableContext);

  const handleChange = (
    key: keyof PersonalType,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    let response;
    if (action === "edit") {
      response = await updatePersonal(data);
    } else {
      response = await addPersonal(data);
    }

    if (response.status === 200) {
      refreshData();
    }
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
        <SheetHeader>
          <SheetTitle>Personal</SheetTitle>
          <SheetDescription>
            {action === "edit"
              ? "Edit the personal information for this person."
              : "Add a new person."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-4 gap-4 px-10 pt-2">
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input
              value={data.CURRENT_FIRST_NAME}
              onChange={(e) => handleChange("CURRENT_FIRST_NAME", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input
              value={data.CURRENT_LAST_NAME}
              onChange={(e) => handleChange("CURRENT_LAST_NAME", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Middle Name</Label>
            <Input
              value={data.CURRENT_MIDDLE_NAME}
              onChange={(e) => handleChange("CURRENT_MIDDLE_NAME", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Birth Date</Label>
            <Input
              value={data.BIRTH_DATE}
              onChange={(e) => handleChange("BIRTH_DATE", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Social Security Number</Label>
            <Input
              value={data.SOCIAL_SECURITY_NUMBER}
              onChange={(e) => handleChange("SOCIAL_SECURITY_NUMBER", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Drivers License</Label>
            <Input
              value={data.DRIVERS_LICENSE}
              onChange={(e) => handleChange("DRIVERS_LICENSE", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Address 1</Label>
            <Input
              value={data.CURRENT_ADDRESS_1}
              onChange={(e) => handleChange("CURRENT_ADDRESS_1", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Address 2</Label>
            <Input
              value={data.CURRENT_ADDRESS_2 ? data.CURRENT_ADDRESS_2 : ""}
              onChange={(e) => handleChange("CURRENT_ADDRESS_2", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>City</Label>
            <Input
              value={data.CURRENT_CITY}
              onChange={(e) => handleChange("CURRENT_CITY", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <Input
              value={data.CURRENT_COUNTRY}
              onChange={(e) => handleChange("CURRENT_COUNTRY", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Zip</Label>
            <Input
              value={data.CURRENT_ZIP}
              onChange={(e) => handleChange("CURRENT_ZIP", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <Input
              value={data.CURRENT_GENDER}
              onChange={(e) => handleChange("CURRENT_GENDER", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input
              value={data.CURRENT_PHONE_NUMBER}
              onChange={(e) => handleChange("CURRENT_PHONE_NUMBER", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Personal Email</Label>
            <Input
              value={data.CURRENT_PERSONAL_EMAIL}
              onChange={(e) => handleChange("CURRENT_PERSONAL_EMAIL", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Marital Status</Label>
            <Input
              value={data.CURRENT_MARITAL_STATUS}
              onChange={(e) => handleChange("CURRENT_MARITAL_STATUS", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Ethnicity</Label>
            <Input
              value={data.ETHNICITY}
              onChange={(e) => handleChange("ETHNICITY", e)}
            />
          </div>
          <div className="space-y-2">
            <Label>Shareholder Status</Label>
            <Input
              value={data.SHAREHOLDER_STATUS}
              onChange={(e) => handleChange("SHAREHOLDER_STATUS", e)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <SheetClose asChild>
            <Button variant={"ghost"}>Cancel</Button>
          </SheetClose>
          {action === "edit" ? (
            <SheetClose asChild>
              <Button
                className="bg-blue-600 hover:bg-blue-500 hover:text-white text-white"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </SheetClose>
          ) : (
            <SheetClose asChild>
              <Button
                className="bg-blue-600 hover:bg-blue-500 hover:text-white text-white"
                variant={"ghost"}
                onClick={handleSubmit}
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
