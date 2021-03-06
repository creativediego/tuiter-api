import HttpRequest from '../shared/HttpRequest';
import HttpResponse from '../shared/HttpResponse';
import IGenericController from '../shared/IGenericController';

/**
 *
 * Interface representing a CRUD controller for the likes resource api. Defines the controller operations of a like, including user likes/dislikes tuit, finding all users that liked a tuit, and finding all tuits liked by a user.
 */
export default interface ILikeController {
  userLikesTuit(req: HttpRequest): Promise<HttpResponse>;
  userDislikesTuit(req: HttpRequest): Promise<HttpResponse>;
  findAllUsersByTuitLike(req: HttpRequest): Promise<HttpResponse>;
  findAllTuitsLikedByUser(req: HttpRequest): Promise<HttpResponse>;
  findAllTuitsDislikedByUser(req: HttpRequest): Promise<HttpResponse>;
}
