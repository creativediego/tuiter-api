/**
 * Interface for hashing strategies.
 */
export default interface IHasher {
  hash(phrase: string): any;
  compare(plainPhrase: string, encryptedPhrase: string): any;
}
