terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = var.region
}

data "aws_s3_bucket" "cloud-resume" {
  bucket = var.bucketname
}

## Bucket Object Uploads ##
resource "aws_s3_bucket_object" "index" {
  depends_on   = [data.aws_s3_bucket.cloud-resume]
  bucket       = var.bucketname
  key          = "index.html"
  source       = "../html/index.html"
#  acl          = "public-read"
  content_type = "text/html"
}

resource "aws_s3_bucket_object" "error" {
  depends_on   = [data.aws_s3_bucket.cloud-resume]
  bucket       = var.bucketname
  key          = "error.html"
  source       = "../html/error.html"
#  acl          = "public-read"
  content_type = "text/html"
}

resource "aws_s3_bucket_object" "gif" {
  depends_on = [data.aws_s3_bucket.cloud-resume]
  bucket     = var.bucketname
  key        = "yellowranger.gif"
  source     = "../html/yellowranger.gif"
  #acl        = "public-read"
}

