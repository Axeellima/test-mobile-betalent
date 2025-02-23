function formatDateToBRLocale(date: string | Date): string {
  const dateObj = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  return dateObj.toLocaleDateString('pt-BR', options);
}

export default formatDateToBRLocale;
