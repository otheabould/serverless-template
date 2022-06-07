import type { ValidatedEventAPIGatewayProxyEvent } from '@common/api-gateway';
import { formatJSONResponse } from '@common/api-gateway';
import { middyfy } from '@common/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(hello);
