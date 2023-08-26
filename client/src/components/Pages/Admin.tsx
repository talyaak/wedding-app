import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../Common/AuthContext';
import styled from 'styled-components';
import { UserWithoutSensitiveFields } from '../../api/interfaces/AuthInterfaces';
import { useNavigate } from 'react-router-dom';
import { RsvpState } from '../../api/interfaces/RSVPData';

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
`;

const TableHeader = styled.th`
    padding: 12px;
    text-align: left;
    background-color: #f1f1f1;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f1f1f1;
    }
`;

const TableCell = styled.td`
    padding: 12px;
`;

const AdminPage = () => {
    const [userData, setUserData] = useState<UserWithoutSensitiveFields[] | null>(null);
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();
    const [arrivingCount, setArrivingCount] = useState(0);
    const [notArrivingCount, setNotArrivingCount] = useState(0);
    const [undecidedCount, setUndecidedCount] = useState(0);

    useEffect(() => {
        if (isAuthenticated() && user?.admin) {
            fetchUserData();
            calcArrivals();
        } else {
            navigate('/');
        }

    }, [isAuthenticated, userData]);

    // useEffect(() => {
    //     // Call calcArrivals when userData changes
    // }, [userData]);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/api/user/admin');
            setUserData(response.data);
            await calcArrivals();
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const calcArrivals = () => {
        let [arrivingCount, notArrivingCount, undecidedCount] = [0, 0, 0];
        if (userData) {
            userData.forEach((user) => {
                if (user.rsvp.attending === RsvpState.Arriving) {
                    arrivingCount += user.rsvp.numberOfGuests;
                } else if (user.rsvp.attending === RsvpState.NotArriving) {
                    notArrivingCount += user.rsvp.numberOfGuests;
                } else {
                    undecidedCount++;
                }
            });
            setArrivingCount(arrivingCount);
            setNotArrivingCount(notArrivingCount);
            setUndecidedCount(undecidedCount);
        }
    }

    const attendingString = (attending: string) => {
        if (attending === RsvpState.Arriving) return 'Arriving ✔️';
        else if (attending === RsvpState.NotArriving) return 'Not Arriving ❌';
        else if (attending === RsvpState.Undecided) return 'Undecided ❓';
        else return 'Not Replied Yet ❓';
    }

    return (
        <div>
            <h1 className='text-center text-3xl'>Admin Page</h1>
            <StyledTable>
                <thead>
                    <TableRow>
                        <TableHeader>Total Arriving: {arrivingCount}</TableHeader>
                        <TableHeader>Total No-Answer: {undecidedCount}</TableHeader>
                        <TableHeader>Total No-Show: {notArrivingCount}</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Attending</TableHeader>
                        <TableHeader>Number of Guests</TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {userData ? (userData.map((user) => (
                        <TableRow key={user.phoneNumber}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{attendingString(user.rsvp.attending)}</TableCell>
                            <TableCell>{user.rsvp.numberOfGuests}</TableCell>
                        </TableRow>
                    ))) : <></>}
                </tbody>
            </StyledTable>
        </div>
    );
};

export default AdminPage;
