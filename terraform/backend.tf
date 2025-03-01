terraform {
  backend "s3" {
    bucket = "kenshi-artifacts"
    key    = "terraform/terraform.tfstate"
    region = "ap-south-1"
  }
}

provider "aws" {
  region = "ap-south-1"
}
