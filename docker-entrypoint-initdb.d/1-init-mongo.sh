#!/bin/bash

echo "Initializing MongoDB..."

mongoimport -u myuser -p userpassword --db mydatabase --collection tasks --file /docker-entrypoint-initdb.d/tests.json --jsonArray


