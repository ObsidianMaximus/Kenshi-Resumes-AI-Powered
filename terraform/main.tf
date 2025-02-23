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

resource "aws_instance" "kenshi_ec2" {
  ami           = "ami-0fcfcdc5efc25e0bc" # Ubuntu 24.04
  instance_type = "t2.micro"
  key_name      = var.ssh_key_name
  security_groups = [aws_security_group.allow_http_ssh.name]

  tags = {
    Name = "Kenshi-EC2"
  }

  # Prevent instance recreation unless the key changes
  lifecycle {
    ignore_changes = [ami]
  }
}

resource "aws_security_group" "allow_http_ssh" {
  name        = "allow_http_ssh"
  description = "Allow HTTP and SSH"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

output "ec2_public_ip" {
  value = aws_instance.kenshi_ec2.public_ip
}
