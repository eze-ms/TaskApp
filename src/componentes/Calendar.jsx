import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calendar.css';

function Calendar() {
    const [selected, setSelected] = React.useState(null);
    return (
        <div className='box-calendario'>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                className='datapiker'
            />
        </div>
    );
}

export default Calendar;
