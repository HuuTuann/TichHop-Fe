export type EmploymentType = {
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
