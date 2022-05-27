// Import stylesheets
import './style.css';
import { orderBy } from 'lodash';

// // Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// // Just modify what you want

// const playground: HTMLElement = document.getElementById('playground');
// const phrase: string = `this is a dummy phrase that i am using to test lodash`;

// playground.innerHTML = startCase(phrase);
interface IConcernTrend {
  incidentsRaised?: number;
  concernsRaised?: number;
  yearWeek: string;
}

export interface ITrend {
  incidents: IConcernTrend[];
  concerns: IConcernTrend[];
}

const response: ITrend = {
  incidents: [
    { incidentsRaised: 1, yearWeek: '2021/4' },
    { incidentsRaised: 1, yearWeek: '2021/6' },
    { incidentsRaised: 1, yearWeek: '2021/7' },
    { incidentsRaised: 1, yearWeek: '2021/11' },
    { incidentsRaised: 6, yearWeek: '2021/12' },
    { incidentsRaised: 2, yearWeek: '2021/17' },
    { incidentsRaised: 2, yearWeek: '2021/18' },
    { incidentsRaised: 2, yearWeek: '2021/21' },
    { incidentsRaised: 2, yearWeek: '2021/22' },
    { incidentsRaised: 1, yearWeek: '2021/23' },
    { incidentsRaised: 1, yearWeek: '2021/25' },
    { incidentsRaised: 5, yearWeek: '2021/26' },
    { incidentsRaised: 2, yearWeek: '2021/29' },
    { incidentsRaised: 1, yearWeek: '2021/31' },
    { incidentsRaised: 1, yearWeek: '2021/35' },
    { incidentsRaised: 24, yearWeek: '2021/37' },
    { incidentsRaised: 5, yearWeek: '2021/38' },
    { incidentsRaised: 1, yearWeek: '2020/47' },
    { incidentsRaised: 1, yearWeek: '2020/48' },
    { incidentsRaised: 2, yearWeek: '2020/51' },
  ],
  concerns: [
    { concernsRaised: 18, yearWeek: '2021/1' },
    { concernsRaised: 5, yearWeek: '2021/3' },
    { concernsRaised: 9, yearWeek: '2021/4' },
    { concernsRaised: 6, yearWeek: '2021/5' },
    { concernsRaised: 9, yearWeek: '2021/6' },
    { concernsRaised: 7, yearWeek: '2021/7' },
    { concernsRaised: 1, yearWeek: '2021/8' },
    { concernsRaised: 2, yearWeek: '2021/9' },
    { concernsRaised: 2, yearWeek: '2021/10' },
    { concernsRaised: 3, yearWeek: '2021/11' },
    { concernsRaised: 7, yearWeek: '2021/12' },
    { concernsRaised: 3, yearWeek: '2021/13' },
    { concernsRaised: 1, yearWeek: '2021/14' },
    { concernsRaised: 2, yearWeek: '2021/16' },
    { concernsRaised: 12, yearWeek: '2021/17' },
    { concernsRaised: 3, yearWeek: '2021/18' },
    { concernsRaised: 6, yearWeek: '2021/19' },
    { concernsRaised: 4, yearWeek: '2021/20' },
    { concernsRaised: 4, yearWeek: '2021/21' },
    { concernsRaised: 8, yearWeek: '2021/22' },
    { concernsRaised: 1, yearWeek: '2021/23' },
    { concernsRaised: 10, yearWeek: '2021/24' },
    { concernsRaised: 3, yearWeek: '2021/25' },
    { concernsRaised: 8, yearWeek: '2021/26' },
    { concernsRaised: 5, yearWeek: '2021/27' },
    { concernsRaised: 2, yearWeek: '2021/28' },
    { concernsRaised: 3, yearWeek: '2021/29' },
    { concernsRaised: 3, yearWeek: '2021/30' },
    { concernsRaised: 2, yearWeek: '2021/31' },
    { concernsRaised: 2, yearWeek: '2021/32' },
    { concernsRaised: 3, yearWeek: '2021/35' },
    { concernsRaised: 16, yearWeek: '2021/37' },
    { concernsRaised: 1, yearWeek: '2021/38' },
    { concernsRaised: 9, yearWeek: '2020/47' },
    { concernsRaised: 7, yearWeek: '2020/48' },
    { concernsRaised: 2, yearWeek: '2020/49' },
    { concernsRaised: 1, yearWeek: '2020/50' },
    { concernsRaised: 3, yearWeek: '2020/51' },
    { concernsRaised: 1, yearWeek: '2020/52' },
  ],
};

const incidents = response.incidents;
const concerns = response.concerns;

concerns.forEach((concern) => {
  const incident = incidents.filter((x) => x.yearWeek === concern.yearWeek);
  concern.incidentsRaised = incident[0]?.incidentsRaised ?? 0;
});

console.log(orderBy(concerns, 'yearWeek'));

// const combined = merge({ ...incidents }, { ...concerns });
// console.log('combined', combined);
