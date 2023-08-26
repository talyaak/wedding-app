import mongoose, { connect } from 'mongoose';
import { faker } from '@faker-js/faker';
import User, { RSVPData, RsvpState } from '../models/userModel'; // Update the import path
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
import fs from 'fs/promises';
import { password } from './generateRealUsers/password';
import { userArray } from './generateRealUsers/inputData';

dotenv.config();

// Connect to MongoDB
const connectDb = async () => {
    const mongoUri = process.env.MONGODB_URI;

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
const generateDefaultRSVPData = (): RSVPData => {
    // Default state for a new user
    const attending = RsvpState.NotReplied;
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

interface UserLog {
    phoneNumber: string;
    name: string;
    originalPassword: string;
    hashedPassword: string;
}

// Generate and save random users
const generateRandomUsers = async (count: number) => {
    try {
        const userLog: UserLog[] = [];

        const userSavingPromises = userArray.map(async userData => {
            const hashedPassword = await generateRandomPassword(password);
            const user = new User({
                phoneNumber: userData.Phone,
                name: userData.Name,
                password: hashedPassword,
                rsvp: generateDefaultRSVPData(),
            });

            await user.save();

            // Create a user object for the log
            const userLogEntry = {
                phoneNumber: user.phoneNumber,
                name: user.name,
                originalPassword: password,
                hashedPassword: hashedPassword,
            };

            userLog.push(userLogEntry);
        });

        await Promise.all(userSavingPromises); // Wait for all user saving promises to complete

        // Save the user log to the JSON file
        await fs.writeFile('userGenerationLog.json', JSON.stringify(userLog, null, 2));

        console.log(`${count} random users generated and saved.`);
    } catch (error) {
        console.error('Error generating and saving users:', error);
    } finally {
        mongoose.disconnect(); // Disconnect from MongoDB after all operations
    }
};

const execute = async () => {
    await connectDb();
    generateRandomUsers(userArray.length); // Generate 10 random users
}

execute();