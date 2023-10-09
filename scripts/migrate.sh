#!/usr/bin/env bash

# sudo apt-get install parallel

NAME="$1"

if [ -z "$NAME" ]; then
  echo "Usage: $0 <name>"
  exit 1
fi

execute_migration() {
  local i=$1
  local NAME=$2
  yarn prisma migrate dev --name "$NAME" --schema prisma/"db${i}"/schema.prisma
}

export -f execute_migration
seq 1 6 | parallel -j 6 execute_migration {} "$NAME"
