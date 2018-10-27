#!/bin/zsh
echo -n "请输入clone地址"
read PERSON

cd ./homeworkWeboureda
git clone $PERSON

for dir in $(ls)
do
  [ -d $dir ] && echo $dir
  cd $dir
  for file in $(ls)
  do
    if [ ! -d $file ]
    then
      result=$(echo $file | grep ".html")
      if [[ $result != "" && ! -d $file ]]; then
        xdg-open $file
      fi
    fi
  done
  cd ..
done
