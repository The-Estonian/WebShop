@echo off

set IMAGE_NAME=postgres:latest
set CONTAINER_NAME=postgres

:: Pull the Docker image if not already present
echo Ensuring Docker image %IMAGE_NAME% is available...
docker pull %IMAGE_NAME%

:: Run the Docker container
echo Running Docker container %CONTAINER_NAME%...
docker run -d --name %CONTAINER_NAME% -p 5432:5432 --network devpipe_network --env-file .env %IMAGE_NAME%
