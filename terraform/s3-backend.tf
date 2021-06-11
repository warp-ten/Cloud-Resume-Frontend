
terraform {
  backend "s3" {
    bucket = "cloudresume-state"
    key    = "statefiles/website/terraform.tfstate"
    region = "us-east-1"
#    dynamodb_table = "terraform-state-lock"
    encrypt = true
  }
}