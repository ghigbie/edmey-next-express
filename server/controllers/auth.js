export const register = (req, res, next) => {
    console.log('BODY:', req.body);
    res.json("login user response");
};

