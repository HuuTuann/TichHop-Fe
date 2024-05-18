export type PersonalType = {
  PERSONAL_ID: number; // ID duy nhất cho mỗi cá nhân.
  CURRENT_FIRST_NAME: string; // Họ tên đầy đủ.
  CURRENT_LAST_NAME: string; // Họ tên đầy đủ.
  CURRENT_MIDDLE_NAME: string; // Họ tên đầy đủ.
  BIRTH_DATE: string; // Ngày sinh.
  SOCIAL_SECURITY_NUMBER: string; // Số an sinh xã hội.
  DRIVERS_LICENSE: string; // Số giấy phép lái xe.
  CURRENT_ADDRESS_1: string; // Địa chỉ hiện tại.
  CURRENT_ADDRESS_2: string | null; // Địa chỉ hiện tại.
  CURRENT_CITY: string; // Thành phố hiện tại.
  CURRENT_COUNTRY: string; // Quốc gia hiện tại.
  CURRENT_ZIP: number; // Mã bưu điện hiện tại.
  CURRENT_GENDER: string; // Giới tính hiện tại.
  CURRENT_PHONE_NUMBER: string; // Số điện thoại hiện tại.
  CURRENT_PERSONAL_EMAIL: string; // Email cá nhân hiện tại.
  CURRENT_MARITAL_STATUS: string; // Tình trạng hôn nhân.
  ETHNICITY: string; // Dân tộc.
  SHAREHOLDER_STATUS: 0 | 1; // Tình trạng cổ đông.
};
