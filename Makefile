hello_path := kustomize_overlays/hello-nodejs
dev_path := $(hello_path)/dev 
uat_path := $(hello_path)/uat 
advanced_path := $(hello_path)/advanced

# DEV
check-dev:
	@kubectl kustomize $(dev_path)

deploy-dev:
	@kubectl apply -k $(dev_path)

delete-dev:
	@kubectl delete -k $(dev_path)

datree-dev:
	@datree kustomize test $(dev_path)

# UAT
check-uat:
	@kubectl kustomize $(uat_path)

deploy-uat:
	@kubectl apply -k $(uat_path)

delete-uat:
	@kubectl delete -k $(uat_path)

datree-uat:
	@datree kustomize test $(uat_path)

# Advanced
check-advanced:
	@kubectl kustomize $(advanced_path)

deploy-advanced:
	@kubectl apply -k $(advanced_path)

delete-advanced:
	@kubectl delete -k $(advanced_path)

datree-advanced:
	@datree kustomize test $(advanced_path) 

# Docker
build-and-deploy:
	echo "> Pre-requisite : docker login"
	docker build -t ygouzerh/hello-world-kubernetes:latest hello-nodejs
	docker push ygouzerh/hello-world-kubernetes:latest
