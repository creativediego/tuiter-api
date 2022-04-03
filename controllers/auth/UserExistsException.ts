import BaseError from '../../errors/BaseError';
import { StatusCode } from '../shared/HttpStatusCode';

/**
 * Auth exception used for registration when a user already exists.
 */
export default class UserExistsException extends BaseError {
  public code = StatusCode.conflict;
  constructor(message: string) {
    super(message);
    Object.freeze(this);
  }
}
