import { useState } from 'react';

function ScheduleVisit() {
    const [selectedDate, setSelectedDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSelectedDate(event.target.visitDate.value);
    };

    return (
        <div>
            <h1 className='text-3xl font-bold'>Schedule a Visit</h1>
            <form onSubmit={handleSubmit} className='flex gap-6 items-center'>
                <label htmlFor="visitDate">Visit Date:</label><br />
                <input type="date" id="visitDate" name="visitDate" className='text-lg px-3 tracking-wider rounded-lg'/><br />
                <input type="submit" value="Search" className='bg-gainsboro-400 h-9 rounded-md px-6'/>
            </form>
            {selectedDate && <p>Selected Date: {selectedDate}</p>}
        </div>
    );
}

export default ScheduleVisit;
