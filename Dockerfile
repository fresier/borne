FROM registry.gitlab.ulb.be/openshift-resources/base-images/node/18-alpine:latest AS builder
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM gcr.io/distroless/nodejs:18 AS production
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --chown=1001:0 --from=builder /app/next.config.js ./
COPY --chown=1001:0 --from=builder /app/public ./public
COPY --chown=1001:0 --from=builder /app/.next ./.next
COPY --chown=1001:0 --from=builder /app/package-lock.json /app/package.json ./
COPY --chown=1001:0 --from=builder /app/node_modules ./node_modules
COPY --chown=1001:0 --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
USER 1001
EXPOSE 3000
CMD ["./node_modules/next/dist/bin/next", "start"]
