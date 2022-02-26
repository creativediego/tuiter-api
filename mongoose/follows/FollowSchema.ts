import mongoose, { Schema } from 'mongoose';
import IFollow from '../../models/follows/IFollow';

/**
 * Mongoose schema for the follows resource that takes an {@link IFollow} interface. Contains the a reference to the follower and who the follower is following.
 * @constructor FollowSchema
 * @param {Schema.Types.ObjectId} follower the follower user
 * @param {Schema.Types.ObjectId} following the user being followed
 * @module FollowSchema
 *
 */
const FollowSchema = new mongoose.Schema<IFollow>(
  {
    follower: { type: Schema.Types.ObjectId, ref: 'UserModel', required: true },
    following: {
      type: Schema.Types.ObjectId,
      ref: 'UserModel',
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'follows',
  }
);

/**
 * Prevents duplicates.
 */
FollowSchema.index(
  {
    follower: 1,
    following: 1,
  },
  {
    unique: true,
  }
);

export default FollowSchema;
