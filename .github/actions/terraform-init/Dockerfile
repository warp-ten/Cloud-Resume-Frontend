FROM alpine:latest

RUN apk update && apk add wget unzip

RUN wget https://releases.hashicorp.com/terraform/1.0.0/terraform_1.0.0_linux_amd64.zip && unzip /terraform* -d /usr/local/sbin

ENTRYPOINT [ "terraform", "-chdir=/github/workspace/terraform" ]