const User = require('../model/userModel');

exports.daftaruser = async (req, res) => {
    const { Email, Username, Katasandi, No_telp } = req.body;

    try {
        const user = await User.create({
            Email,
            Username,
            Katasandi,
            No_telp,
        });

        res.status(200).json({
            message: "Sudah Terdaftar",
            user: {
                id: user.ID_user, // Corrected this line
                email: user.Email,
                name: user.Username,
                katasandi: user.Katasandi,
                no_telp: user.No_telp,
            },
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            message: "Gagal mendaftar",
        });
    }
};

exports.loginUser = async (req, res)=>{
    const {Username, Katasandi} = req.body;

    try {
        const user = await User.findOne({where: { Username }});
        if(!user) {
            res.status(401).json({
                message:"invalid Email",
            });
        } else{
            if (Katasandi == user.Katasandi){
                res.status(200).json({
                    message: "berhasil login",
                    User:{
                        id: user.ID_user,
                        Username: user.Username
                    }
                })
            } else {
                res.status(401).json({
                    message:"Invalid Username or password",
                });
            }
        }
    }catch (error){
        console.log(error);
        res.status(500).json({
            message: "failed to login",
        });
    }
}