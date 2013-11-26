SENCHA_URL=http://cdn.sencha.com/ext/gpl/ext-4.2.1-gpl.zip
SENCHA_UNZIPPED_DIR=ext-4.2.1.883/

# install nw-gyp
npm install -g nw-gyp

# recompile serialport for node-webkit v0.8.0
cd node_modules/serialport
nw-gyp rebuild --target=0.8.0
cd ../..

# create tmp install dir
mkdir install_tmp
cd install_tmp

# clone ino repo
git clone https://github.com/fradinni/ino.git
cd ino

# build ino manually, make file is corrupted for MacOS
sudo python setup.py install --record ../../ino_installed_files.txt

# back to tmp install dir
cd ..

# download ExtJS
echo "Downloading ExtJS..."
wget $SENCHA_URL
unzip ext-4.2.1-gpl.zip
mv $SENCHA_UNZIPPED_DIR/* ../src/libs/extjs/

# back to root dir
cd ..

# remove tmp install dir
sudo rm -Rf ./install_tmp

# Install codemirror submodule
git submodule update --init

echo "Post install [Finished]"
