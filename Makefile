.PHONY: test

ci-install:
	npm ci

install:
	npm install

test:
	npm test && npm run lint:deprecated-rules
