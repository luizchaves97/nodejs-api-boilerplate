.PHONY: build-dev up up-silent down lint test

# Params
SERVICE_NAME=api

build-dev:
	@docker build -t nodejs/api:development .

up:
	@echo Up application
	@docker-compose up

up-silent:
	@echo Up application silent mode
	@docker-compose up -d

down:
	@echo Down application
	@docker-compose down

lint:
	@echo Run Lint
	@docker-compose exec ${SERVICE_NAME} yarn lint

test:
	@echo Run Test
	@docker-compose exec ${SERVICE_NAME} yarn test

shell:
	@docker-compose exec ${SERVICE_NAME} sh
