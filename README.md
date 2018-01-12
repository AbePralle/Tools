# Tools
Miscellanous tools

## FileSize - fs

### Usage

    fs
    fs <wildcard-filepath-11> <wildcard-filepath-2> ...

Lists the recursive size of each item in the given filepaths. Also useful as a way to find files.

### Wildcards

---------|--------
Wildcard | Meaning
---------|--------
?        | Match a single character
*        | Match any number of characters, does not span folders
**       | Match any number of characters, spanning folders

### Build

    cd FileSize && make

### Examples

    ~/Projects/Rogue> fs
    LICENSE .................. 1,092
    test                     779,188
    Makefile ................. 8,141
    Publish.mk                   228
    Test.cpp ............... 849,231
    Source                16,023,813
    Test.h ................. 139,640
    Wiki                   1,187,145
    Test.rogue ................. 224
    README.md                114,623
    Samples ................ 127,302
    Programs               8,221,601
    build .................. 133,980
    Syntax                    37,020
    Local.mk ..................... 0
    Total: 27,623,228 bytes

    ~/Projects/Rogue> fs **/*.cpp
    Source/Unused/Ref.cpp ................................................ 1,558
    Source/Libraries/Standard/NativeCPP.cpp                               36,469
    Source/RogueC/Bootstrap/RogueC.cpp ............................... 4,868,355
    Source/RogueC/Build/Rogo.cpp                                         668,917
    Source/RogueC/Build/RogueC.cpp ................................... 7,225,467
    Programs/RogueC/macOS/Libraries/Rose/examples/Rose.cpp             1,960,684
    Programs/RogueC/macOS/Libraries/Rose/Rose.cpp ...................... 145,244
    Programs/RogueC/macOS/Libraries/Standard/NativeCPP.cpp                36,469
    Total: 14,943,163 bytes

