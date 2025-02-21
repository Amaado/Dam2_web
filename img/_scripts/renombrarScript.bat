@echo off
setlocal enabledelayedexpansion

echo [1/2] Quitando la parte _delay-0.05s de los nombres...
rem Renombrar temporalmente para evitar colisiones
for %%F in (frame_*_delay-0.05s.png) do (
    ren "%%F" "temp_%%F"
)

rem Quitar la cadena _delay-0.05s de los nombres
for %%F in (temp_frame_*_delay-0.05s.png) do (
    set "fname=%%~nF"
    rem fname es "temp_frame_<numero>_delay-0.05s"
    set "fname=!fname:temp_=!"
    set "fname=!fname:_delay-0.05s=!"
    rem Ahora fname es "frame_<numero>"
    ren "%%F" "!fname!.png"
)

echo [2/2] Renumerando los frames secuencialmente...
set /a count=0
rem Usamos "dir" para obtener la lista ordenada alfabéticamente
for /f "delims=" %%F in ('dir /b /on frame_*.png') do (
    rem Formatear el contador a tres dígitos
    set "num=00!count!"
    set "num=!num:~-3!"
    ren "%%F" "frame_!num!.png"
    set /a count+=1
)

endlocal
echo Proceso completado.
pause
