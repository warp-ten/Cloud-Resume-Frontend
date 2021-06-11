
terraform {
  backend "s3" {
    bucket = var.backend_name
    key    = "statefiles/website/terraform.tfstate"
    region = "us-east-1"
#    dynamodb_table = "terraform-state-lock"
    encrypt = true
  }
}