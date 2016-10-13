Build/fs: FileSize.rogue Makefile
	mkdir -p Build
	roguec FileSize.rogue --main --output=Build
	cd Build && g++ -o fs FileSize.cpp
	cp Build/fs /usr/local/bin/fs
	chmod u+x /usr/local/bin/fs

