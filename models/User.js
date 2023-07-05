import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,

        },

        address: {
            type: String,

        },

        job: {
            type: String,

        },

        password: {
            type: String,

        },

        confirmPassword: {
            type: String,
            required: true,

        },
        emailVerifed: {
            type: String,
            default: null,
        }
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);

