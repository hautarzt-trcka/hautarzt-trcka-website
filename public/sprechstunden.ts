export interface DayTime {
    weekday: string;
    times: string[];
}

export const sprechstunden: Array<DayTime> = [
    {
        weekday: "Montag",
        times: ["08:00 - 12:00", "14:00 - 18:00"],
    }, {
        weekday: "Dienstag",
        times: ["08:00 - 12:00", "14:00 - 18:00"],
    }, {
        weekday: "Mittwoch",
        times: ["08:00 - 14:00"],
    }, {
        weekday: "Donnerstag",
        times: ["08:00 - 12:00", "14:00 - 18:00"],
    }, {
        weekday: "Freitag",
        times: ["08:00 - 14:00"],
    },
]

export const terminvereinbarungen: Array<DayTime> = [
    {
        weekday: "Montag",
        times: ["09:00 - 11:00", "15:00 - 16:00"],
    }, {
        weekday: "Dienstag",
        times: ["09:00 - 11:00", "15:00 - 16:00"],
    }, {
        weekday: "Mittwoch",
        times: ["09:00 - 11:00"],
    }, {
        weekday: "Donnerstag",
        times: ["09:00 - 11:00", "15:00 - 16:00"],
    }, {
        weekday: "Freitag",
        times: ["09:00 - 11:00"],
    },
]
