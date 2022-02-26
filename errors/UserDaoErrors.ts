/**
 * @readonly
 * @enum {string}
 * Error messages for the user DAO used when throwing exceptions.
 */
export enum UserDaoErrors {
  CANNOT_CREATE_USER = 'Databse error in creating user.',
  CANNOT_CONNECT_DB = 'Unable to connect to database.',
  CANNOT_DISCONNECT_DB = 'Error diconnecting from database',
  DB_ERROR_CREATING_USER = 'Unable to save to database.',
  DB_ERROR_FINDING_USER = 'Database error finding user.',
  DB_ERROR_FINDING_ALL_USERS = 'Database error in retrieving all users.',
  USER_NOT_FOUND = 'No users found in the database.',
  USER_ALREADY_EXISTS = 'Cannot create: A user by this email already exists in the database.',
  CANNOT_DELETE_USER = 'Databse error in deleting a user.',
  NO_USER_TO_UPDATE = 'A user by this id does not exist to update.',
  NO_USER_TO_DELETE = 'No user by that id to delete.',
  USER_DOES_NOT_EXIST = 'A user by this id does not exist.',
}
