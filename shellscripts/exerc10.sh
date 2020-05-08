#!/bin/bash

dia=$(date +%F)

for arquivo in `ls *.png`
do
    mv $arquivo $dia-${arquivo}
done