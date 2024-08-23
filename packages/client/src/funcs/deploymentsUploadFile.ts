/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from '../core.js';
import {
  encodeFormQuery as encodeFormQuery$,
  encodeSimple as encodeSimple$,
} from '../lib/encodings.js';
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
 * Upload Deployment Files
 *
 * @remarks
 * Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.
 */
export async function deploymentsUploadFile(
  client$: VercelCore,
  request: operations.UploadFileRequest,
  options?: RequestOptions
): Promise<
  Result<
    operations.UploadFileResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = typeof request === 'undefined' ? {} : request;

  const parsed$ = schemas$.safeParse(
    input$,
    value$ => operations.UploadFileRequest$outboundSchema.parse(value$),
    'Input validation failed'
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const path$ = pathToFunc('/v2/files')();

  const query$ = encodeFormQuery$({
    slug: payload$.slug,
    teamId: payload$.teamId,
  });

  const headers$ = new Headers({
    Accept: 'application/json',
    'Content-Length': encodeSimple$(
      'Content-Length',
      payload$['Content-Length'],
      {
        explode: false,
        charEncoding: 'none',
      }
    ),
    'x-now-digest': encodeSimple$('x-now-digest', payload$['x-now-digest'], {
      explode: false,
      charEncoding: 'none',
    }),
    'x-now-size': encodeSimple$('x-now-size', payload$['x-now-size'], {
      explode: false,
      charEncoding: 'none',
    }),
    'x-vercel-digest': encodeSimple$(
      'x-vercel-digest',
      payload$['x-vercel-digest'],
      {
        explode: false,
        charEncoding: 'none',
      }
    ),
  });

  const bearerToken$ = await extractSecurity(client$.options$.bearerToken);
  const security$ = bearerToken$ == null ? {} : { bearerToken: bearerToken$ };
  const context = {
    operationID: 'uploadFile',
    oAuth2Scopes: [],
    securitySource: client$.options$.bearerToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(
    context,
    {
      security: securitySettings$,
      method: 'POST',
      path: path$,
      headers: headers$,
      query: query$,
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
    errorCodes: ['400', '401', '403', '4XX', '5XX'],
    retryConfig: options?.retries || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ['429', '500', '502', '503', '504'],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    operations.UploadFileResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.UploadFileResponseBody$inboundSchema),
    m$.fail([400, 401, 403, '4XX', '5XX'])
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
