import usermodel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//register controller
export const userRegister = async (req, res) => {

    try {
        let { name, email, password } = req.body;

        // Check if user already exists
        let user = await usermodel.findOne({ email });
        if (user) {
            return res.status(401).json({ error: "You already have an account, please login." });
        }

        // Hash the password
        let hashPassword = await bcrypt.hash(password, 10);

        // Create new user
        let newUser = await usermodel.create({ name, email, password: hashPassword });

        return res.status(201).json({ message: "User registered successfully!", user: newUser });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error });
    }
};


// login controller
export const userLogin = async (req, res) => {
    try {
        let { email, password } = req.body;

        // Find user by email
        let findUser = await usermodel.findOne({ email });
        if (!findUser) {
            return res.status(400).json({ error: "Email or Password is incorrect" });
        }

        // Compare password
        let isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Email or Password is incorrect" });
        }

        // Generate JWT token
        let token = jwt.sign(
            { email: findUser.email, name: findUser.name, id: findUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Send token in cookie
        res.cookie("token", token);

        return res.status(200).json({ message: "Login successful", user: findUser.name });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};
