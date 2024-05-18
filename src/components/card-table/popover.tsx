import { DeleteModal } from "@/components/card-table/delete-modal";
import { EmploymentActionsSheet } from "@/components/card-table/employment-actions-sheet";
import { PersonalActionsSheet } from "@/components/card-table/personal-actions-sheet";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EmploymentType } from "@/types/employment";
import { PersonalType } from "@/types/personal";
import { BsThreeDotsVertical } from "react-icons/bs";

type PopoverType = {
  type: "personal" | "employment";
  initialData: PersonalType | EmploymentType;
};

const PopoverComponent = ({ type, initialData }: PopoverType) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"ghost"} size={"icon"}>
          <BsThreeDotsVertical />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-32 space-y-2">
        {type === "personal" ? (
          <>
            <PersonalActionsSheet
              action="edit"
              initialData={initialData as PersonalType}
            />
            <DeleteModal
              id={String((initialData as PersonalType).PERSONAL_ID)}
              type="personal"
            />
          </>
        ) : (
          <>
            <EmploymentActionsSheet
              action="edit"
              initialData={initialData as EmploymentType}
            />
            <DeleteModal
              id={String((initialData as EmploymentType).EMPLOYMENT_ID)}
              type="employment"
            />
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverComponent;
