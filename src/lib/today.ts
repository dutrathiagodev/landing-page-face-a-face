const TIME_API =
  "https://timeapi.io/api/time/current/zone?timeZone=America/Sao_Paulo";

type TimeApiResponse = {
  year: number;
  month: number;
  day: number;
};

function format(day: number, month: number, year: number) {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${pad(day)} · ${pad(month)} · ${year}`;
}

function fromSystemClock() {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).formatToParts(new Date());

  const get = (type: string) =>
    Number(parts.find((part) => part.type === type)?.value);

  return format(get("day"), get("month"), get("year"));
}

export async function getToday() {
  try {
    const response = await fetch(TIME_API, { next: { revalidate: 3600 } });
    if (!response.ok) return fromSystemClock();

    const { day, month, year } = (await response.json()) as TimeApiResponse;
    return format(day, month, year);
  } catch {
    return fromSystemClock();
  }
}
