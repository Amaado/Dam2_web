@echo off
setlocal enabledelayedexpansion

REM Define el frame inicial (en este caso, 51)
set start_frame=50

REM Obtiene la lista de archivos que coinciden con el patrón frame_XXX.png
set file_count=0
for %%f in (frame_???.png) do (
    set /a file_count+=1
    set "files[!file_count!]=%%f"
)

REM Calcula el número total de frames
set /a total_frames=file_count

REM Reordena los archivos comenzando desde el frame inicial
set /a current_frame=0
for /l %%i in (%start_frame%,1,%total_frames%) do (
    set /a current_frame+=1
    set "new_name=final_frame_!current_frame:~-3!.png"
    ren "!files[%%i]!" "!new_name!"
)

REM Continúa desde el frame 1 hasta el frame inicial - 1
for /l %%i in (1,1,%start_frame%-1) do (
    set /a current_frame+=1
    set "new_name=final_frame_!current_frame:~-3!.png"
    ren "!files[%%i]!" "!new_name!"
)

echo Proceso completado.