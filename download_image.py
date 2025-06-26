#!/usr/bin/env python3
"""
Script to download your profile image and save it locally
This ensures your image will work on GitHub Pages
"""

import requests
import os
from pathlib import Path

def download_profile_image():
    """Download the profile image from the external URL"""
    
    # Your current image URL
    image_url = "https://i.ibb.co/99CQJHPB/nawlesh-new.jpg"
    
    # Create images directory if it doesn't exist
    images_dir = Path("images")
    images_dir.mkdir(exist_ok=True)
    
    # Download the image
    try:
        print("Downloading your profile image...")
        response = requests.get(image_url, timeout=10)
        response.raise_for_status()
        
        # Save the image
        image_path = images_dir / "profile.jpg"
        with open(image_path, "wb") as f:
            f.write(response.content)
        
        print(f"✅ Image saved successfully to: {image_path}")
        print(f"📁 File size: {len(response.content)} bytes")
        
        # Verify the file exists
        if image_path.exists():
            print("✅ Image file verified!")
            print("\n🚀 Next steps:")
            print("1. Run: git add images/profile.jpg")
            print("2. Run: git commit -m 'Add profile image'")
            print("3. Run: git push")
            print("4. Your image will now work on GitHub Pages!")
        else:
            print("❌ Error: Image file not found after download")
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Error downloading image: {e}")
        print("\n🔧 Manual solution:")
        print("1. Go to: https://i.ibb.co/99CQJHPB/nawlesh-new.jpg")
        print("2. Right-click and 'Save image as...'")
        print("3. Save as 'profile.jpg' in the 'images' folder")
        
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    download_profile_image()
