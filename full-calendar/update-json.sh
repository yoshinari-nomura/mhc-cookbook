#!/bin/sh

mhc scan thismonth+6m  --search='category:holiday'   \
                       --format=json > holidays.json
mhc scan thismonth+6m  --search='!category:holiday'  \
                       --format=json > events.json
