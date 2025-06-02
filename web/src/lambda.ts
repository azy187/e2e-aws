import type {
    Handler,
    Context,
    APIGatewayProxyCallback,
    APIGatewayEvent,
} from "aws-lambda";
import { launchOptions } from "./launchOptions";
import { uploadToS3 } from "./s3";

export const handler: Handler = async (
    event: APIGatewayEvent,
) => {
  
};
