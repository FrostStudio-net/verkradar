export function daysUntilDeadline(dateString) {
  if (!dateString) return 999;
  const today = new Date();
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return 999;
  const ms = date - new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

export function formatShortDate(value) {
  if (!value) return "No deadline";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(date);
}

export function formatDateTime(value) {
  if (!value) return "Unknown date";
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(new Date(value));
}
