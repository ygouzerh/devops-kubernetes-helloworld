# README

This folder is used to deploy easily a new hello world service to kubernetes.

- simple/ : deploy the service using a simple `kubectl apply -f .`
- complex/ : showcase the usage of kustomize
- simple-ingress-azure/ : showcase an ingress that fixes the known issue on AKS regarding the wrong healthchecks on the Load Balancer.
