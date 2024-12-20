import os
import sys

def create_folder_with_files(folder_name,app_name,file_suffixes):
    """
    Create a folder and generate specific Java files based on the folder name.

    Args:
        folder_name (str): Name of the folder and the base name for the files.
    """
    try:
        # Capitalize the folder name for proper class naming
        class_name = folder_name[0].upper() + folder_name[1:]
        
        # List of file names to generate
        # Dynamically build file templates
        file_templates = {
            f"{class_name}{suffix}.java": f"package com.example.{app_name}.{folder_name};\n\n public class {class_name}{suffix} {{\n\n}}"
            for suffix in file_suffixes
        }


        # Create the folder
        os.makedirs(folder_name, exist_ok=True)
        print(f"Folder '{folder_name}' created successfully!")

        # Generate files with basic content
        for file_name, content in file_templates.items():
            file_path = os.path.join(folder_name, file_name)
            with open(file_path, 'w') as file:
                file.write(content)
            print(f"File '{file_name}' created in '{folder_name}'")

        print("All files created successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Check if folder name is passed as argument
    if len(sys.argv) < 3:
        print("Usage: python script.py <app_name> <folder_name>")
        sys.exit(1)

    # Get the folder name from command-line arguments
    app_name = sys.argv[1]
    # Get all folder names from command-line arguments
    folder_names = sys.argv[2:]

    file_suffixes = ["Otp","ResponseOtp"]

    # ["", "Repository", "Mapper", "Service", "Controller"]

    # Process each folder name
    for folder_name in folder_names:
        create_folder_with_files(folder_name,app_name,file_suffixes)


