import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useContext } from "react";

import { TableContext } from "@/contexts/TableContext";

type DeleteModalType = {
  id: string;
  type: "personal" | "employment";
};

export const DeleteModal = ({ id, type }: DeleteModalType) => {
  const { refreshData } = useContext(TableContext);

  const handleDelete = () => {
    type === "personal"
      ? console.log("Delete personal")
      : console.log("Delete employment");

    refreshData();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="w-full justify-start text-red-500 hover:bg-red-200 hover:text-red-500"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
            Are you sure you want to continue?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={handleDelete}
              variant={"ghost"}
              className="text-white hover:text-white bg-red-500 hover:opacity-90 hover:bg-red-500"
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
