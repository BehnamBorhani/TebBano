const daysOfWeek = [
  "شنبه",
  "یک‌شنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];
const hours = [
  "8:00",
  "8:15",
  "8:30",
  "8:45",
  "9:00",
  "9:15",
  "9:30",
  "9:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
  "13:00",
  "13:15",
  "13:30",
  "13:45",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "16:00",
  "16:15",
  "16:30",
  "16:45",
  "17:00",
  "17:15",
  "17:30",
  "17:45",
  "18:00",
  "18:15",
  "18:30",
  "18:45",
  "19:00",
  "19:15",
  "19:30",
  "19:45",
  "20:00",
];
const month = ["آذر", "دی", "بهمن"];
const daysOfMonth = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

export const randomDates = [
  "سه‌شنبه 12 بهمن - 17:00",
  "شنبه 5 دی - 10:30",
  "پنج‌شنبه 29 دی - 13:45",
  "جمعه 10 دی - 9:00",
  "سه‌شنبه 17 بهمن - 18:00",
  "جمعه 26 آذر - 10:45",
  "جمعه 10 بهمن - 15:15",
  "جمعه 6 بهمن - 12:00",
  "چهارشنبه 3 بهمن - 12:30",
  "پنج‌شنبه 3 آذر - 11:00",
  "سه‌شنبه 10 بهمن - 19:15",
  "دوشنبه 22 آذر - 16:15",
  "جمعه 13 آذر - 14:00",
  "جمعه 6 آذر - 11:30",
  "دوشنبه 19 آذر - 12:45",
  "شنبه 25 آذر - 14:45",
  "دوشنبه 23 دی - 11:00",
  "یک‌شنبه 7 دی - 20:00",
  "جمعه 1 آذر - 11:15",
  "سه‌شنبه 26 بهمن - 15:00",
  "سه‌شنبه 9 بهمن - 14:45",
  "شنبه 27 آذر - 18:30",
  "دوشنبه 11 دی - 10:15",
  "پنج‌شنبه 21 آذر - 17:15",
  "سه‌شنبه 19 آذر - 16:45",
  "شنبه 25 بهمن - 10:45",
  "پنج‌شنبه 19 دی - 9:15",
  "چهارشنبه 22 دی - 11:00",
  "شنبه 18 آذر - 11:30",
  "یک‌شنبه 17 آذر - 8:45",
  "یک‌شنبه 6 بهمن - 18:00",
  "پنج‌شنبه 16 آذر - 16:45",
  "شنبه 1 آذر - 15:00",
  "سه‌شنبه 14 آذر - 13:30",
  "پنج‌شنبه 10 آذر - 11:00",
  "جمعه 22 آذر - 10:15",
  "دوشنبه 17 بهمن - 14:15",
  "چهارشنبه 16 دی - 14:30",
  "پنج‌شنبه 30 دی - 12:15",
  "یک‌شنبه 20 دی - 18:30",
  "چهارشنبه 8 بهمن - 9:45",
  "شنبه 15 آذر - 19:30",
  "یک‌شنبه 5 بهمن - 12:45",
  "شنبه 18 دی - 19:15",
  "شنبه 25 بهمن - 20:00",
  "یک‌شنبه 1 دی - 17:30",
  "دوشنبه 19 بهمن - 12:00",
  "جمعه 25 بهمن - 19:15",
  "شنبه 25 آذر - 9:45",
  "سه‌شنبه 17 بهمن - 18:30",
  "دوشنبه 25 آذر - 9:15",
  "چهارشنبه 27 بهمن - 16:45",
  "چهارشنبه 11 آذر - 18:00",
  "شنبه 25 آذر - 11:45",
  "دوشنبه 6 دی - 9:00",
  "سه‌شنبه 21 بهمن - 12:30",
  "شنبه 2 بهمن - 19:00",
  "دوشنبه 30 دی - 16:00",
  "چهارشنبه 27 دی - 17:00",
  "جمعه 27 دی - 16:00",
  "دوشنبه 20 دی - 14:45",
  "پنج‌شنبه 2 بهمن - 17:30",
  "دوشنبه 4 بهمن - 19:30",
  "چهارشنبه 24 بهمن - 9:00",
  "چهارشنبه 23 بهمن - 12:30",
  "چهارشنبه 2 بهمن - 8:45",
  "یک‌شنبه 12 دی - 16:45",
  "جمعه 17 بهمن - 16:15",
  "پنج‌شنبه 28 آذر - 12:15",
  "دوشنبه 30 دی - 8:45",
  "شنبه 18 آذر - 15:30",
  "دوشنبه 15 آذر - 10:30",
  "شنبه 9 آذر - 9:00",
  "جمعه 23 دی - 12:30",
  "پنج‌شنبه 30 دی - 12:30",
  "پنج‌شنبه 14 بهمن - 13:15",
  "جمعه 5 بهمن - 19:45",
  "پنج‌شنبه 3 دی - 17:45",
  "سه‌شنبه 4 آذر - 15:45",
  "جمعه 14 آذر - 15:45",
  "یک‌شنبه 25 بهمن - 14:30",
  "پنج‌شنبه 26 دی - 12:15",
  "یک‌شنبه 5 دی - 15:00",
  "سه‌شنبه 5 آذر - 19:00",
  "چهارشنبه 18 آذر - 15:45",
  "جمعه 2 دی - 14:30",
  "یک‌شنبه 30 دی - 18:00",
  "شنبه 12 بهمن - 18:00",
  "یک‌شنبه 10 آذر - 15:45",
  "یک‌شنبه 27 آذر - 12:00",
  "پنج‌شنبه 11 دی - 11:00",
  "پنج‌شنبه 15 آذر - 12:15",
  "پنج‌شنبه 12 دی - 12:45",
  "جمعه 19 آذر - 8:30",
  "سه‌شنبه 1 بهمن - 9:15",
  "سه‌شنبه 8 آذر - 17:00",
  "چهارشنبه 17 آذر - 16:15",
  "چهارشنبه 13 دی - 17:00",
  "شنبه 28 دی - 8:30",
  "یک‌شنبه 28 دی - 17:30",
];