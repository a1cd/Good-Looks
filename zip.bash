if [ ! -f "getting-started.zip" ]; then
    echo "creating file"
    zip -r getting-started.zip ./getting-started
else
    echo "freshening file"
    zip -f getting-started.zip ./getting-started
fi