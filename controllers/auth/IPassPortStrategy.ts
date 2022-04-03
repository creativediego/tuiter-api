import { Router, Express } from 'express';
import IDao from '../../daos/shared/IDao';
import IUser from '../../models/users/IUser';
import IValidator from '../../shared/IValidator';

/**
 * Passport auth strategy interface used in the auth controller.
 */
export default interface IPassPortStrategy {
  execute(path: string, router: Router, dao: IDao<IUser>): void;
}
