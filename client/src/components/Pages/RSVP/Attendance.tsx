import React, { useState, useEffect } from 'react'
import styles from '../../../style'
import { useNavigate } from 'react-router-dom';
import { RSVPData, RsvpState } from '../../../api/interfaces/RSVPData';
import axios from 'axios';
import { useAuth } from '../../Common/AuthContext';

// Define an enum for RSVP options
enum RsvpOption {
    Attending = 'attending',
    AttendingPlusOne = 'attending_plus_one',
    Undecided = 'undecided',
    NotAttending = 'not_attending',
}

const AttendanceMenu = () => {
    const navigate = useNavigate();
    const [attending, setAttending] = useState<RsvpState | null>(null);
    const [numOfGuests, setNumOfGuests] = useState<number | null>(null);
    const { user } = useAuth();

    // Function to fetch user's RSVP status from the backend

    useEffect(() => {
        let mounted = true;
        const fetchUserRsvp = async () => {
            try {
                // const response = await fetch('/api/user/rsvp');
                const response = await axios.get<RSVPData>('/api/user/rsvp');

                if (mounted) {
                    setAttending(response.data.attending);
                    setNumOfGuests(response.data.numberOfGuests);
                }

            } catch (error) {
                console.error('Error fetching user RSVP:', error);
            }
        }
        fetchUserRsvp();

        // Cleanup function
        return () => {
            const clear = async () => (mounted = false);
            clear();
        }
    }, []); // Fetch user's RSVP status when the component mounts

    const handleRsvp = async (option: RsvpOption): Promise<void> => {
        // Simulate sending data to the backend and updating state
        let attendanceReport: RSVPData;
        if (option === RsvpOption.Attending) {
            attendanceReport = {
                attending: RsvpState.Arriving,
                numberOfGuests: 1
            }
        } else if (option === RsvpOption.AttendingPlusOne) {
            attendanceReport = {
                attending: RsvpState.Arriving,
                numberOfGuests: 2
            }
        } else if (option === RsvpOption.Undecided) {
            attendanceReport = {
                attending: RsvpState.Undecided,
                numberOfGuests: 0
            }
        } else {
            attendanceReport = {
                attending: RsvpState.NotArriving,
                numberOfGuests: 0
            }
        }
        try {
            await axios.put('/api/user/rsvp', attendanceReport);
            navigate('../goodbye');
        } catch (error) {
            console.error('Error updating RSVP:', error);
        }
    };

    return (

        <div className="flex min-h-full flex-1 flex-col items-center justify-start px-6 py-2 lg:px-8">
            <div className="self-center text-center">
                <h2 className="font-reborn font-medium xs:hidden ss:block ss:text-[38px] sm:text-[45px] md:text-[65px] md:mt-10">
                    So what's it gonna be,
                </h2>
                <h2 className="font-reborn font-medium xs:hidden ss:block ss:text-[35px] sm:text-[40px] md:text-[50px] md:py-0">
                    {user?.name.split(' ')[0]}?
                </h2>
                <h2 className="font-reborn font-medium xs:block text-[38px] ss:hidden">
                    So what's it
                </h2>
                <h2 className="font-reborn font-medium xs:block text-[38px] ss:hidden">
                    gonna be,
                </h2>
                <h2 className="font-reborn font-medium xs:block text-[38px] ss:hidden">
                    {user?.name.split(' ')[0]}?
                </h2>

            </div>

            <div className='flex flex-col justify-evenly items-center bg-[#F1EBE5]/75 border-2 border-[#000000]/25 h-[400px] xs:w-[90%] sm:w-[50%] lg:w-[30%] rounded-sm md:my-0 my-2'>
                <div
                    className={`${styles.rsvpButton} ` + `${attending === RsvpState.Arriving && numOfGuests === 1 ? 'bg-gray-500/25' : ''}`}
                    onClick={() => handleRsvp(RsvpOption.Attending)}
                >
                    <p>אני מגיע.ה 🥳</p>
                </div>
                <div
                    className={`${styles.rsvpButton} ` + `${attending === RsvpState.Arriving && numOfGuests === 2 ? 'bg-gray-500/25' : ''}`}
                    onClick={() => handleRsvp(RsvpOption.AttendingPlusOne)}
                >
                    <p>אני מגיע.ה + 1 🥳🥳</p>
                </div>
                <div
                    className={`${styles.rsvpButton} ` + `${attending === RsvpState.Undecided ? 'bg-gray-500/25' : ''}`}
                    onClick={() => handleRsvp(RsvpOption.Undecided)}
                >
                    <p>עדיין לא יודע.ת 🤔</p>
                </div>
                <div
                    className={`${styles.rsvpButton} ` + `${attending === RsvpState.NotArriving ? 'bg-gray-500/25' : ''}`}
                    onClick={() => handleRsvp(RsvpOption.NotAttending)}
                >
                    <p>לצערי לא אגיע 😔</p>
                </div>
            </div>
        </div>

    )
}

export default AttendanceMenu