# Project Name

SDET Cypress with Cucumber


## Project Description

Runs Cypress with Cucumber in a docker container

### Prerequisites

Ensure that Docker is installed on your local machine

## Getting Started

1. Open a terminal, navigate to the directory containing your Dockerfile, and run the following command to build the Docker image:
```bash
docker build -t [DOCKER_CONTAINER_NAME] .
```
Replace [DOCKER_CONTAINER_NAME] with a suitable name for your Docker image

2. After the image is built, you can run Cypress tests inside a Docker container. You can use the following command to run the tests
```bash
docker run -it --rm -v $(pwd):/app [DOCKER_CONTAINER_NAME]
```
