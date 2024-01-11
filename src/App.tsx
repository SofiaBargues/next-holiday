const HOLIDAYS = [
  {
    date: new Date("2024-01-01"),
    name: "New Year’s Day",
  },
  {
    date: new Date("2024-03-29"),
    name: "Good Friday",
  },
  {
    date: new Date("2024-04-01"),
    name: "Easter Monday",
  },
  {
    date: new Date("2024-05-06"),
    name: "Early May bank holiday",
  },
  {
    date: new Date("2024-05-27"),
    name: "Spring bank holiday",
  },
  {
    date: new Date("2024-08-26"),
    name: "Summer bank holiday",
  },
  {
    date: new Date("2024-12-25"),
    name: "Christmas Day",
  },
  {
    date: new Date("2024-12-26"),
    name: "Boxing Day",
  },
  {
    date: new Date("2025-01-01"),
    name: "New Year’s Day",
  },
  {
    date: new Date("2025-04-18"),
    name: "Good Friday",
  },
  {
    date: new Date("2025-04-21"),
    name: "Easter Monday",
  },
  {
    date: new Date("2025-05-05"),
    name: "Early May bank holiday",
  },
  {
    date: new Date("2025-05-26"),
    name: "Spring bank holiday",
  },
  {
    date: new Date("2025-08-25"),
    name: "Summer bank holiday",
  },
  {
    date: new Date("2025-12-25"),
    name: "Christmas Day",
  },
  {
    date: new Date("2025-12-26"),
    name: "Boxing Day",
  },
  {
    date: new Date("2026-01-01"),
    name: "New Year’s Day",
  },
  {
    date: new Date("2026-04-03"),
    name: "Good Friday",
  },
  {
    date: new Date("2026-04-06"),
    name: "Easter Monday",
  },
  {
    date: new Date("2026-05-04"),
    name: "Early May bank holiday",
  },
  {
    date: new Date("2026-05-25"),
    name: "Spring bank holiday",
  },
  {
    date: new Date("2026-08-31"),
    name: "Summer bank holiday",
  },
  {
    date: new Date("2026-12-25"),
    name: "Christmas Day",
  },
  {
    date: new Date("2026-12-28"),
    name: "Boxing Day",
  },
];

const today = new Date();
const nextHoliday = HOLIDAYS.find((holiday) => holiday.date >= today) || {
  ...HOLIDAYS[0],
  date: new Date(
    HOLIDAYS[0].date.getFullYear() + 1,
    HOLIDAYS[0].date.getMonth(),
    HOLIDAYS[0].date.getDate() + 1
  ),
};

const msDiff = nextHoliday.date.getTime() - today.getTime();
const dayDiff = Math.round(msDiff / 86400000);

console.log(today);
console.log(nextHoliday.date);
console.log(new Date("2024-01-11"));

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function App() {
  return (
    <main>
      <h1>
        The next holiday ({nextHoliday.name}) is {rtf.format(dayDiff, "day")}.
      </h1>
    </main>
  );
}

export default App;
