function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.length === 12) {
    return `+55 (${cleaned.substring(2, 4)}) ${cleaned.substring(
      4,
      8,
    )}-${cleaned.substring(8)}`;
  } else if (cleaned.length === 13) {
    return `+55 (${cleaned.substring(2, 4)}) ${cleaned.substring(
      4,
      9,
    )}-${cleaned.substring(9)}`;
  } else {
    return phoneNumber;
  }
}
export default formatPhoneNumber;
