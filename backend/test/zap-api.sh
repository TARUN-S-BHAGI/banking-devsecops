#!/bin/bash

docker run -t owasp/zap2docker-stable zap-api-scan.py \
  -t http://host.docker.internal:5000/api-docs \
  -f openapi -r zap-report.html
