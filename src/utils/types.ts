// quiz actions
export const ALL_QUIZ_QUESTION_GET = 'ALL_QUIZ_QUESTION_GET';
export const ALL_QUIZ_QUESTION_GET_SUCCESS = 'ALL_QUIZ_QUESTION_GET_SUCCESS';
export const ALL_QUIZ_QUESTION_GET_FAILED = 'ALL_QUIZ_QUESTION_GET_FAILED';


// game actiona
export const GAME_ANSWER_QUESTION = 'GAME_ANSWER_QUESTION';
export const GAME_RESET_STATE = 'GAME_RESET_STATE';
export const GAME_START = 'GAME_START';

// statuses
export const STATUS_IDLE = 'IDLE';
export const STATUS_LOADING = 'LOADING';
export const STATUS_SUCCEDDED =
    'SUCCEEDED';
export const STATUS_FAILED = 'FAILED';

export type Status = typeof STATUS_IDLE | typeof STATUS_LOADING | typeof STATUS_SUCCEDDED | typeof STATUS_FAILED;


