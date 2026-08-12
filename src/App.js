import React, { Component } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from 'bpk-component-calendar';
import format from 'date-fns/format';

import './App.css';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');

const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    nameNarrow: 'S',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    nameNarrow: 'M',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    nameNarrow: 'T',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    nameNarrow: 'W',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thu',
    nameNarrow: 'T',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    nameNarrow: 'F',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    nameNarrow: 'S',
    index: 6,
    isWeekend: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BpkText tagName="h1" textStyle="xxl">
            Flight Schedule
          </BpkText>
        </header>

        <main className="App-main">
          <BpkCalendar
            id="flight-schedule-calendar"
            onDateSelect={this.handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={this.state.selectionConfiguration}
          />

          <BpkButton onClick={() => alert('It works!')}>
            Continue
          </BpkButton>
        </main>
      </div>
    );
  }
}

export default App;