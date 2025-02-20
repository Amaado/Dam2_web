@echo off
setlocal enabledelayedexpansion

echo [1/2] Quitando la parte _delay-0.05s de los nombres...
rem Renombrar temporalmente para evitar colisiones
for %%F in (frame_???_delay-0.05s.png) do (
    ren "%%F" "temp_%%F"
)

rem Quitar la cadena _delay-0.05s
for %%F in (temp_frame_???_delay-0.05s.png) do (
    set "fname=%%~nF"
    rem fname es "temp_frame_XXX_delay-0.05s"
    set "fname=!fname:temp_=!"
    set "fname=!fname:_delay-0.05s=!"
    rem Ahora fname es "frame_XXX"
    ren "%%F" "!fname!.png"
)

echo [2/2] Rotando la numeracion para que el frame 050 se convierta en 000...
rem Renombrar de nuevo a nombres temporales para evitar sobrescrituras
for %%F in (frame_???.png) do (
    ren "%%F" "temp_%%F"
)

for %%F in (temp_frame_???.png) do (
    set "fname=%%~nF"
    rem fname ahora es "temp_frame_XXX"; quitar "temp_"
    set "fname=!fname:temp_=!"
    rem Extraer el número: de "frame_XXX" obtenemos "XXX"
    set "num=!fname:frame_=!"

    rem Convertir el número de string con ceros a la izquierda a decimal usando el truco:
    rem Anteponemos un "1" y luego restamos 1000 para obtener el valor real.
    set "numVal=1!num!"
    set /a num=numVal - 1000

    rem Calcular el nuevo número: (num - 50 + 100) mod 100
    set /a new=(num - 50 + 100) %% 100

    rem Formatear el nuevo número a tres dígitos
    if !new! LSS 10 (
        set "newName=00!new!"
    ) else if !new! LSS 100 (
        set "newName=0!new!"
    ) else (
        set "newName=!new!"
    )

    ren "%%F" "frame_!newName!.png"
)

endlocal
echo Proceso completado.
pause
