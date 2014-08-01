var fs = require('fs');
var _ = require('underscore');
var sslConfig = require('../lib/sslConfig.json');
var certificates = {};

var parseBundle = function (bundleString) {
    var ca = [];
    var cert = [];
    bundleString.split("\n").forEach(function groupCerts (line) {
        if (line.length !== 0) {
            cert.push(line);
            if (line.match(/-END CERTIFICATE-/)) {
                // end of cert, push to ca array and reset cert
                ca.push(cert.join("\n"));
                cert = [];
            }
        }
    });
    return ca;
}

_.each(sslConfig, function getCertificate(path, certName) {
    if (certName === 'bundle') {
        certificates[certName] = parseBundle(fs.readFileSync(path).toString());
    } else {
        certificates[certName] = fs.readFileSync(path).toString();
    }
    }
);

module.exports = certificates;
