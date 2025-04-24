#!/bin/bash

# Base URL for the images
base_url="http://ecosig.ma/images/gallery"

# Loop to download images from 1.jpg to 11.jpg
for i in {1..11}; do
    # Construct the image URL
    image_url="${base_url}/${i}.jpg"
    
    # Use curl to download the image and save it in the current folder
    curl -o "${i}.jpg" "$image_url"
done

echo "Download completed!"