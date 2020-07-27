FROM gitpod/workspace-full:latest

USER gitpod
RUN npm install -g @angular/cli

USER root