"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IMulticall__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]"
            },
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]"
            },
        ],
        stateMutability: "payable",
        type: "function"
    },
];
var IMulticall__factory = /** @class */ (function () {
    function IMulticall__factory() {
    }
    IMulticall__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IMulticall__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IMulticall__factory.abi = _abi;
    return IMulticall__factory;
}());
exports.IMulticall__factory = IMulticall__factory;