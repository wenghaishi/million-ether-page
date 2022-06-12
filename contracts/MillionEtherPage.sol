// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

contract MillionEtherPage {
    bytes3[1000][1000] public pixels;

    function colorPixels(uint x, uint y, bytes3 color) {
        pixels[x][y] = color;
        
    }
}