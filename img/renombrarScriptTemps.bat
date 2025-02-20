@echo off
setlocal enabledelayedexpansion

echo Iniciando el proceso de copia...
set start=50

for /L %%i in (0,1,99) do (
    rem Suma start + %%i y aplica el módulo 100 en dos pasos para obtener el índice original
    set /a temp=start+%%i
    set /a origIndex=temp%%100

    rem Formatear el índice original a tres dígitos
    set "orig=000!origIndex!"
    set "orig=!orig:~-3!"

    rem Formatear el nuevo índice (%%i) a tres dígitos
    set "new=000%%i"
    set "new=!new:~-3!"

    echo Copiando: temp_frame_!orig!.png  ->  final_frame_!new!.png

    if exist "temp_frame_!orig!.png" (
        copy "temp_frame_!orig!.png" "final_frame_!new!.png" >nul
        echo Copiado: temp_frame_!orig!.png como final_frame_!new!.png
    ) else (
        echo ERROR: No se encontró temp_frame_!orig!.png.
    )
)

echo Proceso de copia completado.
pause
