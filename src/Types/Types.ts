export interface Joke {
  id: string;
  joke: string;
}
export interface intialStateType {
  jokes: Array<Joke>;
  page: number;
  loading: boolean;
}
export interface actionType {
  type: string;
  payload?: Array<Joke>;
}
