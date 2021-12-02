import bcrypt from "bcrypt";
//Need the following controllers for routes:
//register
//login
//getUsers? -> already in userController
//validateToken
const validateToken = (req, res) => {
    console.log("Token validated, user authorized");
    return res.status(200).json({
        message: "Successful Autorization!",
    });
};
const register = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                message: err.message,
                error: err,
            });
        }
        //Insert user into DB here...
    });
};
export default { validateToken, register };
