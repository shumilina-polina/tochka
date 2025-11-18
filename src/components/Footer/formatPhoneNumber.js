export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length < 11) {
    return phone;
  }

  const match = cleaned.match(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]} ${match[5]}`;
  }

  return phone;
};
