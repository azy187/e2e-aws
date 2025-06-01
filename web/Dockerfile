FROM public.ecr.aws/lambda/nodejs:22 AS builder
WORKDIR /app
COPY src/lambda.ts src/
COPY tsconfig.json package.json package-lock.json ./
RUN npm ci
RUN npm run build
    
FROM public.ecr.aws/lambda/nodejs:22
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /app/dist/* ./
CMD ["lambda.handler"]