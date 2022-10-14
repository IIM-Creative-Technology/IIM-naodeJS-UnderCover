
import { Model, model, Schema } from "mongoose"

// ---------------------------------------------------------------------------------------------------------------------
//  User Model
// ---------------------------------------------------------------------------------------------------------------------

export interface IUser {
    name: string;
    status: 'UNDERCOVER' | 'USER';
}

export interface IUserDocument extends IUser {
    createdAt: string,
    updatedAt: string
}

export interface IUserModel extends Model<IUserDocument> {
    save(): void;
}

// ---------------------------------------------------------------------------------------------------------------------
// User Schema
// ---------------------------------------------------------------------------------------------------------------------

const UserSchema = new Schema<IUserDocument, IUserModel>({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['UNDERCOVER', 'USER'],
        default: 'USER',
    },
}, {
    timestamps: true,
});

// ---------------------------------------------------------------------------------------------------------------------
// Schema registration
// ---------------------------------------------------------------------------------------------------------------------

module.exports = model<IUserDocument, IUserModel>('User', UserSchema);