#!/bin/bash
sudo apt update -y
sudo apt install docker.io -y
sudo systemctl start docker
sudo usermod -aG docker ubuntu
# docker pull ghcr.io/obsidianmaximus/kenshi-resumes-ai-powered:latest
# docker run -d -p 80:4173 --name kenshi-resumes ghcr.io/obsidianmaximus/kenshi-resumes-ai-powered:latest