REGISTRY ?= gcr.io/helios-public/heliostech/rubykube-website
TAG ?= ${REGISTRY}
RELEASE_NAME ?= rubykube-io
NAMESPACE ?= helios

.PHONY: default help build push deploy run

default: help

deploy: push
	helm upgrade --install ${RELEASE_NAME} --namespace ${NAMESPACE} chart

push: build
	docker push ${TAG}

run: build
	docker run -p 8080:8080 -d ${TAG}

build:
	docker build . -t ${TAG}

help:
	@echo "Supported subcommands:"
	@echo "deploy   -> deploy ${RELEASE_NAME}"
	@echo "run      -> run application in docker container, visit localhost:8080"
	@echo "build    -> build docker image and tag as ${TAG}"
	@echo "push     -> push docker image to ${REGISTRY}"
