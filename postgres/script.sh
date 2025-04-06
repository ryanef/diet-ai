#! /bin/bash

set -e
psql -U postgres -c "CREATE EXTENSION vector"