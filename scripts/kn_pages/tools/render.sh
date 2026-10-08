#!/bin/bash
# usage: render.sh page skin [width] [cols] [tileheight]
cd "$(dirname "$0")/.."
P=$1; S=$2; W=${3:-1440}; C=${4:-3}; TH=${5:-2400}
python3 build.py $P >/dev/null && NODE_PATH=/opt/node22/lib/node_modules node tools/shot.js $PWD/out/$P.html $S $W $PWD/out/${P}_$S && python3 tools/slice.py out/${P}_${S}_full.png out/${P}_${S} $C $TH
