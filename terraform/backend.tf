terraform {
  backend "s3" {
    bucket = var.backend_name
    key    = "terraform/terraform.tfstate"
    region = var.region
  }
}

provider "aws" {
  region = var.region
}
