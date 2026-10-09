from rembg import remove
from PIL import Image
import io

input_path = 'public/doctor-hero.png'
output_path = 'public/doctor-hero-transparent.png'

print("Removing background...")
with open(input_path, 'rb') as i:
    input_image = i.read()

output_image = remove(input_image)

with open(output_path, 'wb') as o:
    o.write(output_image)

print("Background removed successfully! Saved to", output_path)
