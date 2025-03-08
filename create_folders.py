import os
folders = [
    "Week One",
    "Week Two",
    "Week Three",
    "Week Four",
    "Week Five",
    "Week Six",
    "Week Seven",
    "Week Eight",
    "Week Nine",
    "Week Ten"
]

for folder in folders:
	if not os.path.exists(folder):
		os.makedirs(folder)
		print(f"Created directory: {folder}")
	else:
		print(f"Directory aleary exists: {folder}")