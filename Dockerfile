# Use official Cypress image
FROM cypress/included:13.7.3

WORKDIR /app

COPY . .

RUN npm ci

CMD ["npx", "cypress", "run"]
