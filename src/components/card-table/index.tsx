import { EmploymentActionsSheet } from "@/components/card-table/employment-actions-sheet";
import { PersonalActionsSheet } from "@/components/card-table/personal-actions-sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EmploymentType } from "@/types/employment";
import { PersonalType } from "@/types/personal";

type CardTableProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const CardTable = ({ title, description, children }: CardTableProps) => {
  const initialPersonalData: PersonalType = {
    PERSONAL_ID: 0,
    CURRENT_FIRST_NAME: "",
    CURRENT_LAST_NAME: "",
    CURRENT_MIDDLE_NAME: "",
    BIRTH_DATE: "",
    SOCIAL_SECURITY_NUMBER: "",
    DRIVERS_LICENSE: "",
    CURRENT_ADDRESS_1: "",
    CURRENT_ADDRESS_2: null,
    CURRENT_CITY: "",
    CURRENT_COUNTRY: "",
    CURRENT_ZIP: 0,
    CURRENT_GENDER: "",
    CURRENT_PHONE_NUMBER: "",
    CURRENT_PERSONAL_EMAIL: "",
    CURRENT_MARITAL_STATUS: "",
    ETHNICITY: "",
    SHAREHOLDER_STATUS: 0,
  };

  const initialEmploymentData: EmploymentType = {
    EMPLOYMENT_ID: 0,
    EMPLOYMENT_CODE: "",
    EMPLOYMENT_STATUS: "",
    HIRE_DATE_FOR_WORKING: "",
    WORKERS_COMP_CODE: "",
    TERMINATION_DATE: "",
    REHIRE_DATE_FOR_WORKING: "",
    LAST_REVIEW_DATE: "",
    NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH: 0,
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="w-full flex justify-between">
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          {title === "Personal" ? (
            <PersonalActionsSheet
              action="add"
              initialData={initialPersonalData}
            />
          ) : (
            <EmploymentActionsSheet
              action="add"
              initialData={initialEmploymentData}
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-min w-full">
          {children}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CardTable;
