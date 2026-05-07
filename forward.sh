#!/bin/bash

virsh start darkly
sleep 5

VM_IP=$(virsh domifaddr darkly | awk '/ipv4/ {print $4}' | cut -d'/' -f1)
HOST_IP=$(hostname -I | awk '{print $1}')

if ! sudo iptables -t nat -C PREROUTING -d "$HOST_IP" -p tcp --dport 80 -j DNAT --to-destination "$VM_IP":80 2>/dev/null; then
    sudo iptables -t nat -A PREROUTING -d "$HOST_IP" -p tcp --dport 80 \
        -j DNAT --to-destination "$VM_IP":80
fi

if ! sudo iptables -C FORWARD 1 -p tcp -d "$VM_IP" --dport 80 -j ACCEPT 2>/dev/null; then
    sudo iptables -I FORWARD 1 -p tcp -d "$VM_IP" --dport 80 -j ACCEPT
fi

