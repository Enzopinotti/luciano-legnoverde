// Add utils methods here.
export const sendMsgWhatsapp = (message:string, phoneNumber: string) => {
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

