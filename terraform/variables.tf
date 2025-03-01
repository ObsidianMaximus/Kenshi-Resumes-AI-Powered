variable "ssh_key_name" {
  description = "The name of the SSH key pair to use for EC2"
  type        = string
}

variable "ami_id" {
    default = "ami-0fcfcdc5efc25e0bc"
    type        = string
}