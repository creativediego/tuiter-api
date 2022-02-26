import { AccountStatus } from './AccountStatus';
import { AccountType } from './AccoutType';
import { ILocation } from './ILocation';

/**
 * User entity interface
 */
export default interface IUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  headerImage: string;
  accountType: AccountType;
  accountStatus: AccountStatus;
  bio: string;
  dateOfBirth: Date;
  location: ILocation;
  passwordEquals(password: string): boolean;
}
