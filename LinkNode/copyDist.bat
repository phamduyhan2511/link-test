robocopy ".\src\contents" ".\dist\Contents" /S /E /nfl /ndl /njh /njs
robocopy ".\src\assets" ".\dist\assets" /S /E /nfl /ndl /njh /njs
robocopy ".\dist" "..\LinkWeb\dist" /S /E /nfl /ndl /njh /njs
robocopy ".\dist" ".\public\dist" /S /E /nfl /ndl /njh /njs
EXIT 0