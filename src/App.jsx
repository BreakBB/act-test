import {useState} from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    return (
        <>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <DatePicker
                    selected={date}
                    onChange={setDate}
                />
            </div>
        </>
    );
}

export default App;
