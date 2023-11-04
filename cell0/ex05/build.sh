if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
else
	count=1
    while [ $count -le "$#" ]; do
    mkdir "ex${!count}"
    ((count++))
    done
fi