export default function getTelephone(telephone) {
  const phone = String(telephone).replace(/[\s-)(]/g, '');

  if (phone.length === 11 && /^8/.test(phone)) {
    return phone.replace(/^8/, '+7');
  }
  return phone;
}
