import { Endpoints } from './models/core/Endpoints';

export const defaultApiVersion = 20220511;

export const defaultEndpoints: Required<Endpoints> = {
  universalSearch: 'https://liveapi.yext.com/v2/accounts/me/search/query',
  verticalSearch: 'https://liveapi.yext.com/v2/accounts/me/search/vertical/query',
  questionSubmission: 'https://liveapi.yext.com/v2/accounts/me/createQuestion',
  status: 'https://answersstatus.pagescdn.com',
  universalAutocomplete: 'https://liveapi-cached.yext.com/v2/accounts/me/search/autocomplete',
  verticalAutocomplete: 'https://liveapi-cached.yext.com/v2/accounts/me/search/vertical/autocomplete',
  filterSearch: 'https://liveapi-cached.yext.com/v2/accounts/me/search/filtersearch',
} as const;

/**
 * The endpoints to use for sandbox experiences.
 *
 * @public
 */
export const SandboxEndpoints: Required<Endpoints> = {
  universalSearch: 'https://liveapi-sandbox.yext.com/v2/accounts/me/search/query',
  verticalSearch: 'https://liveapi-sandbox.yext.com/v2/accounts/me/search/vertical/query',
  questionSubmission: 'https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion',
  status: 'https://answersstatus.pagescdn.com',
  universalAutocomplete: 'https://liveapi-sandbox.yext.com/v2/accounts/me/search/autocomplete',
  verticalAutocomplete: 'https://liveapi-sandbox.yext.com/v2/accounts/me/search/vertical/autocomplete',
  filterSearch: 'https://liveapi-sandbox.yext.com/v2/accounts/me/search/filtersearch',
} as const;