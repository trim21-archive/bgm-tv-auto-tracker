#!/bin/bash
ip_address=$(ip -4 route list match 0/0 | cut -d' ' -f3)
echo "${ip_address} host.docker.internal" >> /etc/hosts

python /server/app.py
