resource "aws_instance" "kenshi_ec2" {
  ami           = var.ami_number # Ubuntu 24.04
  instance_type = "t2.micro"
  security_groups = [aws_security_group.allow_http_ssh.name]
  iam_instance_profile = aws_iam_instance_profile.ssm_instance_profile.name
  user_data = "${file("userdata.sh")}"

  tags = {
    Name = "Kenshi-SSM-Managed-Instance"
  }

}

output "ec2_instance_id" {
  value = aws_instance.kenshi_ec2.id
}

output "ec2_public_ip" {
  value = aws_instance.kenshi_ec2.public_ip
}