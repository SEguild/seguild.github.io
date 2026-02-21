function copyWeakAuraImportString(id) {
    var importString = weakAura[id].code;
    navigator.clipboard.writeText(importString);
}

function getVersion(id) {
    var version = weakAura[id].version;
    return version;
}

var weakAura = weakAura || {};

weakAura["###TBA###"] = {
    name: "Not Yet Implemented",
    id: "###TBA###",
    version: "v0.0.0",
    code: "Not yet implemented. Check back later.",
};

