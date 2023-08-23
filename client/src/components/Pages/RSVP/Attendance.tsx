import React, { useState } from 'react'
import styles from '../../../style'
import { useNavigate } from 'react-router-dom';

// Define an enum for RSVP options
enum RsvpOption {
    Attending = 'attending',
    AttendingPlusOne = 'attending_plus_one',
    Undecided = 'undecided',
    NotAttending = 'not_attending',
}

const AttendanceMenu = () => {
    const [selectedOption, setSelectedOption] = useState<RsvpOption | null>(null);
    const navigate = useNavigate();

    const handleRsvp = (option: RsvpOption): void => {
        // Simulate sending data to the backend and updating state
        setSelectedOption(option);
        navigate('../goodbye');
    };

    return (

        <div className="flex min-h-full flex-1 flex-col items-center justify-start px-6 py-2 lg:px-8">
            <div className="self-center text-center">
                <h2 className="font-reborn font-medium xs:hidden ss:block ss:text-[38px] sm:text-[45px] md:text-[65px] md:py-10">
                    So what's it gonna be?
                </h2>
                <h2 className="font-reborn font-medium xs:block text-[38px] ss:hidden">
                    So what's it
                </h2>
                <h2 className="font-reborn font-medium xs:block text-[38px] ss:hidden">
                    gonna be?
                </h2>

            </div>

            <div className='flex flex-col justify-evenly items-center bg-[#F1EBE5]/75 border-2 border-[#000000]/25 h-[400px] xs:w-[90%] sm:w-[50%] lg:w-[30%] rounded-sm md:my-0 my-2'>
                <div
                    className={`${styles.rsvpButton}`}
                    onClick={() => handleRsvp(RsvpOption.Attending)}
                >
                    <p>אני מגיע.ה 🥳</p>
                </div>
                <div
                    className={`${styles.rsvpButton}`}
                    onClick={() => handleRsvp(RsvpOption.AttendingPlusOne)}
                >
                    <p>אני מגיע.ה + 1 🥳🥳</p>
                </div>
                <div
                    className={`${styles.rsvpButton}`}
                    onClick={() => handleRsvp(RsvpOption.Undecided)}
                >
                    <p>עדיין לא יודע.ת 🤔</p>
                </div>
                <div
                    className={`${styles.rsvpButton}`}
                    onClick={() => handleRsvp(RsvpOption.NotAttending)}
                >
                    <p>לצערי לא אגיע 😔</p>
                </div>

                {/* Display the selected result */}
            </div>
            {selectedOption && <p>You have selected: {selectedOption}</p>}
        </div>

    )
}

export default AttendanceMenu