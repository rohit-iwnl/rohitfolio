export default function DateComponent({ dateString }: { dateString: string }) {
  const formatDate = (date: string): string => {
    if (!date) return "";
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return "";
    
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric", 
      year: "numeric",
    }).format(dateObj);
  };

  return (
    <time dateTime={dateString}>
      {formatDate(dateString)}
    </time>
  );
} 