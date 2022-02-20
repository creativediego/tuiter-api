export enum DaoErrors {
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
  DB_ERROR_CREATING_TUIT = 'Database error creating tuit.',
  TUIT_NOT_FOUND = 'No matching tuit(s) found',
  DB_ERROR_FINDING_TUITS = 'DB error finding tuit(s)',
  DB_ERROR_UPDATING_TUIT = 'DB updating tuit.',
  DB_ERROR_DELETING_TUIT = 'DB deleting tuit.',
  DB_ERROR_CREATING_MESSAGE = 'Database error creating message.',
  DB_ERROR_RETRIEVING_LAST_CONVERSATION_MESSAGES = 'Database error in retrieving the latest conversation message for user',
  DB_ERROR_CREATING_CONVERSATION = 'Database error creating conversation.',
  DB_ERROR_GETTING_CONVERSATION_MESSAGES = 'Database error in getting all messages for conversation.',
  NO_MATCHING_MESSAGES = 'No messages found for the provided conversation.',
  INVALID_CONVERSATION = 'Invalid conversation. Either conversation id invalid, or sender is not a participant in the conversation.',
  DB_ERROR_DELETING_MESSAGE = 'Database error deleting message.',
  NO_MESSAGE_FOUND = 'No message found.',
  NO_CONVERSATION_FOUND = 'No matching conversation found.',
  DB_ERROR_DELETEING_CONVERSATION = 'Database error deleting conversation.',
}
