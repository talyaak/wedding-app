import mongoose, { connect } from 'mongoose';
import { faker } from '@faker-js/faker';
import User, { RSVPData, RsvpState } from '../models/userModel'; // Update the import path
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
import fs from 'fs/promises';

dotenv.config();

// Connect to MongoDB
const connectDb = async () => {
    const mongoUri = process.env.MONGODB_URI;
    console.log(`The MongoDB key is: ${mongoUri}`);

    try {
        await mongoose.connect(mongoUri!);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

function getRandomEnumValue<T extends Record<string, any>>(enumObj: T): T[keyof T] {
    const values = Object.values(enumObj);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

// Function to generate a random RSVPData
const generateRandomRSVPData = (): RSVPData => {
    // const attending = getRandomEnumValue(RsvpState);
    const attending = RsvpState.NotReplied;
    // let numberOfGuests = attending === RsvpState.Arriving ? faker.number.int({ min: 1, max: 2 }) : 0;
    let numberOfGuests = 0;
    return {
        attending: attending,
        numberOfGuests: numberOfGuests,
    }
}

const generateRandomPassword = (plainTextPassword: string): Promise<string> => {
    const saltRounds = 10;

    return new Promise((resolve, reject) => {
        bcrypt.hash(plainTextPassword, saltRounds, (err, hashedPassword) => {
            if (err) {
                reject(`Error hashing password: ${err}`);
            } else {
                resolve(hashedPassword);
            }
        });
    });
}


// Generate and save random users
const generateRandomUsers = async (count: number) => {
    try {
        const userLog = []; // Initialize an array to store user objects for the log

        for (let i = 0; i < count; i++) {
            const plainTextPassword = faker.internet.password();
            const hashedPassword = await generateRandomPassword(plainTextPassword);

            const user = new User({
                phoneNumber: faker.phone.number('05########'),
                name: faker.person.fullName(),
                password: hashedPassword,
                rsvp: generateRandomRSVPData(),
            });

            await user.save();

            // Create a user object for the log
            const userLogEntry = {
                phoneNumber: user.phoneNumber,
                name: user.name,
                originalPassword: plainTextPassword,
                hashedPassword: hashedPassword,
            };

            userLog.push(userLogEntry);
        }

        // Save the user log to the JSON file
        await fs.writeFile('userGenerationLog.json', JSON.stringify(userLog, null, 2));

        console.log(`${count} random users generated and saved.`);
    } catch (error) {
        console.error('Error generating and saving users:', error);
    } finally {
        mongoose.disconnect();
    }
};

const execute = async () => {
    await connectDb();
    generateRandomUsers(10); // Generate 10 random users
}

execute();