echo Setting up environment
call cfg nodejs 4.2.2 git 2.6.3 ruby 2.2.2 python 2.7.10
call npm config set tmp c:\temp

REM Fetch npm dependencies
set PATH=%PATH%;%cd%\node_modules\.bin
set HTTP_PROXY=http://webproxy:8080
git config --global url."https://".insteadOf git://

echo Installing missing nodejs packages
call npm install
call bower install

gulp