#!/usr/bin/env sh
ip_address=$(ip -4 route list match 0/0 | cut -d' ' -f3)
echo "${ip_address} host.docker.internal" >> /etc/hosts

exec python /server/app.py
