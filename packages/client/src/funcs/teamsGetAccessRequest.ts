/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from '../core.js';
import { encodeSimple as encodeSimple$ } from '../lib/encodings.js';
import * as m$ from '../lib/matchers.js';
import * as schemas$ from '../lib/schemas.js';
import { RequestOptions } from '../lib/sdks.js';
import { extractSecurity, resolveGlobalSecurity } from '../lib/security.js';
import { pathToFunc } from '../lib/url.js';
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from '../models/errors/httpclienterrors.js';
import { SDKError } from '../models/errors/sdkerror.js';
import { SDKValidationError } from '../models/errors/sdkvalidationerror.js';
import * as operations from '../models/operations/index.js';
import { Result } from '../types/fp.js';

/**
 * Get access request status
 *
 * @remarks
 * Check the status of a join request. It'll respond with a 404 if the request has been declined. If no `userId` path segment was provided, this endpoint will instead return the status of the authenticated user.
 */
export async function teamsGetAccessRequest(
  client$: VercelCore,
  request: operations.GetTeamAccessRequestRequest,
  options?: RequestOptions
): Promise<
  Result<
    operations.GetTeamAccessRequestResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    value$ =>
      operations.GetTeamAccessRequestRequest$outboundSchema.parse(value$),
    'Input validation failed'
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    teamId: encodeSimple$('teamId', payload$.teamId, {
      explode: false,
      charEncoding: 'percent',
    }),
    userId: encodeSimple$('userId', payload$.userId, {
      explode: false,
      charEncoding: 'percent',
    }),
  };

  const path$ = pathToFunc('/v1/teams/{teamId}/request/{userId}')(pathParams$);

  const headers$ = new Headers({
    Accept: 'application/json',
  });

  const bearerToken$ = await extractSecurity(client$.options$.bearerToken);
  const security$ = bearerToken$ == null ? {} : { bearerToken: bearerToken$ };
  const context = {
    operationID: 'getTeamAccessRequest',
    oAuth2Scopes: [],
    securitySource: client$.options$.bearerToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(
    context,
    {
      security: securitySettings$,
      method: 'GET',
      path: path$,
      headers: headers$,
      body: body$,
      timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
    },
    options
  );
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ['400', '403', '404', '4XX', '5XX'],
    retryConfig: options?.retries || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ['429', '500', '502', '503', '504'],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    operations.GetTeamAccessRequestResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GetTeamAccessRequestResponseBody$inboundSchema),
    m$.fail([400, 403, 404, '4XX', '5XX'])
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
